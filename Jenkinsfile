pipeline {
    agent any
    stages {
        stage("Install Packages"){
            steps {
                sh "npm install"
            }
        }
        stage("Buid"){
            steps{
               sh "npm run build"
            }
        }
    }
}
