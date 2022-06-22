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
                bat "npm install"
            }
        }
        stage("Buid"){
            steps{
               bat "npm run build"
            }
        }
    }
}
