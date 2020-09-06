# kubernetes-typescript

deploy mongodb to kind cluster with pulumi

## deploy kind cluster

```sh
kind create cluster --config kind-config.yaml
kind get kubeconfig > ~/.kube/configs/kind-kind
kubectl config current-context
```

`kubectl config current-context`

```sh
kind-kind
```

## install pulumi

```sh
brew install pulumi
```

`pulumi up`

```sh
Previewing update (dev)

View Live: https://app.pulumi.com/mpecarina/kubernetes-typescript/dev/previews/417ebd08-618e-441e-9068-3655b4fabbb3

     Type                           Name                       Plan       Info
     pulumi:pulumi:Stack            kubernetes-typescript-dev             79 messages
 ~   └─ kubernetes:apps:Deployment  mongo                      update     [diff: ~spec]
```

`kubectl get pods`

```sh
NAME                              READY   STATUS    RESTARTS   AGE
mongo-4oszzsj3-76fbcf97fd-6c952   1/1     Running   0          26m
```
