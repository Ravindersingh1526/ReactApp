pipeline {
    agent any
    tools { nodejs 'node'}
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
