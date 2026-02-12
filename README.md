🚀 Microservices DevOps Deployment with Docker & Kubernetes
📌 Project Overview

This project demonstrates deployment of a simple Node.js microservices architecture using:

Docker

Docker Compose

Kubernetes (Minikube)

kubectl

The goal was to understand containerization, orchestration, service discovery, and scaling.

🏗 Architecture

Services:

user-service (Port 4000)

product-service (Port 5000)

api-gateway (Port 3000)

Initial communication tested via Docker Compose.
Then deployed user-service to Kubernetes cluster using Minikube.

🐳 Docker Implementation
Steps:

Created Dockerfile for each service

Built images using:

docker build -t user-service:latest ./user-service


Used docker-compose for local orchestration:

docker compose up --build

Learned:

Containerization

Docker networking

Service-to-service communication

Image build context

Internal DNS

☸ Kubernetes Deployment (Minikube)
Cluster Setup
minikube start --driver=docker
kubectl get nodes

Deployment

Created user-deployment.yaml:

Deployment with 2 replicas

imagePullPolicy: Never

containerPort: 4000

Created user-service.yaml:

Service type: NodePort

NodePort: 30007

Applied using:

kubectl apply -f user-deployment.yaml
kubectl apply -f user-service.yaml

Image Loading Fix

Since image was local, loaded it into Minikube:

minikube image load user-service:latest


Resolved:

ErrImageNeverPull

🌐 Accessing Service
minikube service user-service


Access endpoint:

/users

📈 Kubernetes Concepts Practiced

Pod

Deployment

ReplicaSet

Service (NodePort)

ImagePullPolicy

ClusterIP

Node

kubectl debugging

Logs inspection
