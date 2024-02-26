# Typescript Node Template/Postgres/Prisma
Template with the following technologies and tooling Typescript, Node, Express, Prisma, ESLint, Husky, Postgres, Docker, prettier.

## Docker set up
1. To begin using docker please follow the installation process: https://docs.docker.com/get-docker/
if you already have docker, please update to the latest version


<img width="1512" alt="Screenshot 2023-07-12 at 12 08 59 AM" src="https://github.com/HackItHub/typescript-node-template/assets/50930123/1e07b59b-b98a-4bb1-88df-30c4c8d5bc04">


2. Once you've installed please continue to github and create a new repository (NOTE: Check the box that says include all branches)


<img width="1512" alt="Screenshot 2023-07-12 at 12 15 27 AM" src="https://github.com/HackItHub/typescript-node-template/assets/50930123/bc7438b3-19cf-49ee-9cc5-4c257f55451c">


3. After  your repository has been created clone your environment that you want to develop on


<img width="1512" alt="Screenshot 2023-07-12 at 12 17 05 AM" src="https://github.com/HackItHub/typescript-node-template/assets/50930123/409ab7a6-995b-4211-8a51-9528e01e8955">

<img width="793" alt="Screenshot 2023-07-12 at 12 18 57 AM" src="https://github.com/HackItHub/typescript-node-template/assets/50930123/7a1e7910-166a-4c1a-a2b9-f05c100c56d4">


4. Go to your github repository settings, switch the default branch to postgres

5. Go to your terminal and delete the rest of the branches

```
git checkout postgres

git branch | grep -v "postgres" | xargs git branch -D

git push origin :<deleted branches>

```

6. Create a .env file and copy over the contents from the .env.example file (this should be development ready)

7. After copying over go to the terminal enter:

```
npm i
npm dev
```

8. When starting with the dev environment be sure to have your postgres running on whatever port you'd like.
9. This concludes the initial set up.
10. To run docker, go to your terminal and run (This may take a few minutes grab a cup of coffee while you wait :coffee:)
```
docker compose -f docker-compose.dev.yml
```
11. After docker is up and running we want to go into the docker container and run this command to see what the name of your api is

```
docker ps
```

<img width="1512" alt="Screenshot 2023-07-12 at 3 29 48 AM" src="https://github.com/HackItHub/typescript-node-template/assets/50930123/886c58f3-68d3-4904-a6dc-f8815b598196">

12. Find the container your api, in this case my container name is: awesome-api-test-api-1, then enter the following command and replace it with your container name

```
docker exec -it awesome-api-test-api-1 npx prisma migrate dev --name init
```

13. After the migration finished, you're ready to develop your app
