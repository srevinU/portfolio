pipeline {
    agent any
    tools {nodejs "22.3.0"}

    environment {
        ENV_NAME = "${env.GIT_BRANCH == 'origin/main' ? 'prod' : (env.GIT_BRANCH == 'origin/stagin' ? 'preprod' : 'dev')}"
    }

    stages {
        stage("Clean") {
            steps {
                script {
                    echo "Cleaning application ..."
                    sh "rm -rf ${WORKSPACE}/backend/dist/*"
                    sh "rm -rf ${WORKSPACE}/backend/node_modules"
                    if (fileExists("${WORKSPACE}/frontend/build")) {
                        sh "rm -rf ${WORKSPACE}/frontend/build"
                    }
                    sh "rm -rf ${WORKSPACE}/frontend/node_modules"
                }
            }
        }
        stage("Build") {
            steps {
                script {
                    echo "Building application ..."
                    sh "cd ${WORKSPACE}/backend && npm install && npm run build"
                    sh "cd ${WORKSPACE}/frontend && npm install && npm run build"
                }
            }
        }
         stage("Unit tests") {
            steps {
                script {
                    echo "Test application ..."
                    echo "Frontend tests ..."
                    sh "cd ${WORKSPACE}/frontend && npm run lint && npm run test"
                    echo "Backend tests ..."
                    sh "cd ${WORKSPACE}/backend && npm run lint && npm run test"
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
                    if (ENV_NAME == 'prod') {
                        
                    }
                    CURRENT_VERSION=${"$(cat ./package.json | grep -m 1 version | sed 's/[^0-9.]//g')"} 
                    echo "Current version is ${CURRENT_VERSION}"
                    npm run release:major
                    NEW_VERSION=${"$(cat ./package.json | grep -m 1 version | sed 's/[^0-9.]//g')"} 
                    echo "New version is ${NEW_VERSION}"
                    sh "VERSION=${NEW_VERSION} docker-compose --env-file env/.env.${ENV_NAME}  -p 'portfolio-${ENV_NAME}' up -d"
                    sh "git tag -a v${NEW_VERSION} -m 'Release version ${NEW_VERSION} from ${CURRENT_VERSION}'"
                    sh "git push origin v${NEW_VERSION}"
                }
            }
        }
    }
    
}
