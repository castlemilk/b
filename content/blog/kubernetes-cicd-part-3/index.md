---
title: Kubernetes-centric Continuous Deliver - Part 3 (Observability)
date: "2019-05-12T22:12:03.284Z"
author: Ben Ebsworth
description: 'A look at the available tooling for post-deployment analysis and how we can measure the success of deployments to gain confidence'
labels: technology,CI/CD,GCP,kubernetes,developer experience,istio,grafana,prometheus,kiali,jaeger
keywords: technology,CI/CD,GCP,kubernetes,kaniko,developer experience,tekton,knative,cicd foundation,CI,CD,continuous delivery,istio,docker,google cloud,pipelines,tutorial,docker-for-mac,minikube,registry,task,taskrun,pipeline resource,production,dockerless,security,googlecloudplatform,googlecloud
release: false
---

![Tekton](./tekton.png)

# Overview

In this article we will explore in detail the ins and outs of an end-to-end continuous delivery platform, comprised of fairly sophisticated set of tools, which we will unpack and explain how they work together. We have an ambitious goal, and if you endure to the end, you should have a good view of what goes into productionising kubernetes environments.

The key sections we will go through are the following:

* Pipelining (Tekton)
* Container Building
* Security
* Eventing/Triggering builds
* Robust deployments via Canary
* Observability
* Developer Experience

