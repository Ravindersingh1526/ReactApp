pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
         stage("Install Packages"){
            steps {
               echo 'HELLO'
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
