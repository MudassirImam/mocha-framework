pipeline {

    agent any

    tools {
        nodejs 'Node22'
    }

    stages {

        stage('Node Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

    stages {

        stage('Checkout') {
            steps {
                echo 'Code already checked out by Jenkins'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Mocha Tests') {
            steps {
                sh 'npm tests'
            }
        }

        stage('Generate Report') {
            steps {
                sh '''
                npx mocha tests/ui/*.js \
                --reporter mochawesome
                '''
            }
        }
    }
    post {
        always {
            echo 'Pipeline Finished'
        }

        success {
            echo 'Tests Passed'
        }

        failure {
            echo 'Tests Failed'
        }
    }
    }

}