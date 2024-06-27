pipeline {
    agent any
    tools {nodejs "nodejs"}

    stages {
        stage("Clean") {
            steps {
                echo "Cleaning application ..."
                sh "rm -rf ${WORKSPACE}/backend/dist/*"
                sh "rm -rf ${WORKSPACE}/backend/node_modules/*"
                if (fileExists("${WORKSPACE}/frontend/build")) {
                    sh "rm -rf ${WORKSPACE}/frontend/build/*"
                }
                sh "rm -rf ${WORKSPACE}/frontend/node_modules/*"
            }
        }
        stage("Build") {
            steps {
                echo "Building application ..."
                sh "cd ${WORKSPACE}/backend && npm install && npm run build"
                sh "cd ${WORKSPACE}/frontend && npm install && npm run build"
            }
        }
         stage("Unit tests") {
            steps {
                echo "Test application ..."
                echo "Frontend tests ..."
                sh "cd ${WORKSPACE}/frontend && npm run lint && npm run test"
                echo "Backend tests ..."
                sh "cd ${WORKSPACE}/backend && npm run lint && npm run test"
                // npm run test:e2e
            }
        }
         stage("Deploy") {
            steps {
                echo "Deploy application ..."
            }
        }
    }
    
}
