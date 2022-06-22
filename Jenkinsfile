pipeline {
    agent any
    stages {
        stage("Hello"){
            steps {
               echo 'Hello'
            }
        }
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
