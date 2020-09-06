import * as k8s from "@pulumi/kubernetesx"

const app = "mongo"
const labels = { app: app }
const mongo = new k8s.Deployment(app, {
  spec: {
    selector: { matchLabels: labels },
    replicas: 1,
    template: {
      metadata: { labels: labels },
      spec: { containers: [{ name: app, image: "mongo:latest" }] },
    },
  },
})

new k8s.Service(app, {
  metadata: {
    labels: mongo.spec.apply((spec) => spec.template.metadata.labels),
  },
  spec: {
    type: "NodePort",
    ports: [{ port: 27017, targetPort: 27017, nodePort: 30000, protocol: "TCP" }],
    selector: labels,
  },
})
