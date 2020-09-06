import * as k8s from "@pulumi/kubernetesx"

const name = "mongo"
const tag = "4.2.9"
const image = `${name}:${tag}`
const labels = { app: name }
const mongo = new k8s.Deployment(name, {
  spec: {
    selector: { matchLabels: labels },
    replicas: 1,
    template: {
      metadata: { labels: labels },
      spec: { containers: [{ name: name, image: image }] },
    },
  },
})

new k8s.Service(name, {
  metadata: {
    labels: mongo.spec.apply((spec) => spec.template.metadata.labels),
  },
  spec: {
    type: "NodePort",
    ports: [{ port: 27017, targetPort: 27017, nodePort: 30000, protocol: "TCP" }],
    selector: labels,
  },
})
