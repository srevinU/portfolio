pipeline {
    agent any
    tools {nodejs "22.3.0"}

    environment {
        // ENV_NAME = "${env.BRANCH_NAME === 'main' ? 'prod' : (env.BRANCH_NAME === 'stagin' ? 'preprod' : 'dev')}"
        // TAG = "${env.BRANCH_NAME.substring(env.BRANCH_NAME.lastIndexOf('/') + 1, env.BRANCH_NAME.length())}"
        // BUILD_VERSION = "${env.TAG}-${env.BUILD_NUMBER}"
        TEST = "test"
    }

    stages {
        stage("Clean") {
            steps {
                script {
                    sh "echo ${env.GIT_BRANCH}"
                    // sh "echo ${env.TAG}"
                    // sh "echo ${env.BUILD_VERSION}"

                    // echo "Cleaning application ..."
                    // sh "rm -rf ${WORKSPACE}/backend/dist/*"
                    // sh "rm -rf ${WORKSPACE}/backend/node_modules"
                    // if (fileExists("${WORKSPACE}/frontend/build")) {
                    //     sh "rm -rf ${WORKSPACE}/frontend/build"
                    // }
                    // sh "rm -rf ${WORKSPACE}/frontend/node_modules"
                }
            }
        }
        stage("Build") {
            steps {
                script {
                    // echo "Building application ..."
                    // sh "cd ${WORKSPACE}/backend && npm install && npm run build"
                    // sh "cd ${WORKSPACE}/frontend && npm install && npm run build"
                }
            }
        }
         stage("Unit tests") {
            steps {
                script {
                    // echo "Test application ..."
                    // echo "Frontend tests ..."
                    // sh "cd ${WORKSPACE}/frontend && npm run lint && npm run test"
                    // echo "Backend tests ..."
                    // sh "cd ${WORKSPACE}/backend && npm run lint && npm run test"
                }
            }
        }
        stage("Container dependancies check (Redis/MongoDB)") {
            steps {
                script {
                    echo "Ping dependancies ..."
                }
            }
        }
        stage("Tests e2e") {
            steps {
                script {
                    echo "Test application E2E ..."
                    // npm run test:e2e
                }
            }
        }
         stage("Deploy") {
            steps {
                script {
                    echo "Deploy application ..."
                    // sh "VERSION=${env.BUILD_VERSION} docker-compose --env-file env/.env.${env.ENV_NAME}  -p 'portfolio-${env.ENV_NAME}'  up -d"
                }
            }
        }
    }
    
}
