# kubernetes-typescript

deploy mongodb to kind cluster with pulumi

## deploy kind cluster

```sh
kind create cluster --config kind-config.yaml
kind get kubeconfig > ~/.kube/configs/kind-kind
kubectl config current-context
```

`kubectl config current-context`

## install pulumi

```sh
brew install pulumi
yarn
```

`pulumi up`
