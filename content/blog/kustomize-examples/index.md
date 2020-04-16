---
title: Kustomize examples 
date: "2019-04-29T22:12:03.284Z"
author: Ben Ebsworth
description: 'Utilising Kustomize in CI/CD workflows to simplify deployment and testing, and enable the representation of different environmental configuration in a streamlined way, demonstrating a number of use-case examples of how to use and extend kustomize'
labels: technology,kubernetes,developer experience
keywords: kustomize,kubernetes,CI/CD,CI,CD,GCP,skaffold,tekton,declarative,platform,templating,yaml,google cloud platform,knative,kubectl
release: false
---
![kustomize](kustomize.jpg)

Kustomize is a fairly new templating tool that has come out of the efforts by the team at [GoogleCloudPlatform](https://github.com/GoogleCloudPlatform). It seeks to provide a different approach to managing the packaging or contextualisation of a number of Kubernetes resources. Compared to Helm which uses variable substitution and other even more obfuscating ways of constructing resources, such as conditionals and iterations available in the Golang templating tool [Sprig](https://github.com/Masterminds/sprig), Kustomize forces the definition of all required resources and then provides a mechanism of merging, replacing and sourcing resources for the given environment or context.

In terms of complexity I would argue that Kustomize is an intermediate step between using raw Kubernetes resources and going deep into templating via [Helm](https://helm.sh/) or other tools. Where I believe Helm still has a strong use-case when it comes to building more complex abstractions, as well as providing a strong story around sharing and versioning, through its packaging and repository system.

## File Structure

Below is a basic file structure of a multi-tier application's resources

```text
resources
├── backend
│   ├── deployment.yaml
│   ├── kustomization.yaml
│   └── service.yaml
├── frontend
│   ├── deployment.yaml
│   ├── kustomization.yaml
│   └── service.yaml
├── mongodb
│   ├── deployment.yaml
│   ├── kustomization.yaml
│   └── service.yaml
└── overlays
    ├── local
    │   └── kustomization.yaml
    ├── non-production
    │   ├── backend_replica_count.yaml
    │   ├── frontend_replica_count.yaml
    │   ├── kustomization.yaml
    │   └── mongodb_cpu_limit.yaml
    └── production
        ├── backend_replica_count.yaml
        ├── frontend_replica_count.yaml
        ├── kustomization.yaml
        └── mongodb_cpu_limit.yaml
```

This layout shows how you can have a number of "bases", coupled with overlays which allow an importing like flow. This facilitates enabling grouping based on the environment the given application is being deployed to. Below we'll delve further into some of the core tenants in Kustomize, and how we can piece them together to produce a workflow for deploying to Kubernetes.

## Bases

## Overlays

## Patching

## ConfigMapGenerator & SecretGenerator

## Plugins

## CLI commands for profit