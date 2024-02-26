# Jawbs

## About

Jawbs is an application to allow users to have an easier time to auto-complete fields in an application form.
Time after time, applicants spend hours filling the same data inside the forms and although businesses have tried
to make this easier for the applicant by adding resume readers, they don't always do a good enough job. Jawbs makes it easier by taking your information one time and auto-fill all the fields for the user. The only action needed is to confirm the data is correct and move to the next form.

## Development

To get started developing you'll need a few things:

1. node.js https://nodejs.org/en
2. VSCode https://code.visualstudio.com/
3. Docker https://www.docker.com/products/docker-desktop/
4. Minimum of 8gb of RAM

Once you've downloaded and have confirmed you have everything you need move on to the next step

### Getting Started

1. Clone the repository
2. Open the repository in the terminal of your choosing and install packages
   `npm i`
3. Start Docker (IMPORTANT)
4. Ensure that Docker and use the script
   `npm run setup`
5. Wait for all scripts to stop download all necessary material. Note: This could take anywhere from
   5-20 minutes.
6. Once everything is running you should have an environment that's running. If there is something wrong
   with you environment please let me (Sharj) know and we'll resolve it together.

### Familiarizing yourself with the environment

#### Script Packages

There are a couple things to note. The package.json in the base directory has a lot of scripts, but there are only a handful of scripts you need to know:

1. `npm run docker:dev` (starts your development environment)
2. `npm run docker:dev:down` (ends your development environment, alternatively you can use ctrl + c for Mac and cmd + c for Window)
3. `npm run lint` (runs the linter for both server and client)
4. `npm run lint:fix` (fixes minor things in both environments)

These four will be your best friends.

##### IMPORTANT

Only use `docker:dev:rebuild` or `docker:dev:prune` in extreme cases. In cases where your dev environment doesn't work. These commands will reset your local database so if there are any important changes in there they won't exist for long.

#### Docker

Once you run `docker:dev` your development environment will open up on

1.  Client http://localhost:3000
2.  Server http://localhost:3001
3.  Prisma Studio http://localhost:5555

If you need to run any commands on the environments like say resetting the database or migrating sql files
you can use Docker Desktop and inside the container they have an `exec` tab which allows commands to be put in.
Alternatively, you can use in your terminal `docker exec -it <container_id_or_name> bash`

#### Eslint & Husky

The client and server both have eslint rules enabled and will run through them after every commit to ensure that
the code base is free from bad practices and is formatted. There are, in times, where the we can't help but break these eslint rules, and in those cases you can use `// eslint-disable-next-line`. Cases like that might appear when running a for loop for prisma, which eslint doesn't like, but if we don't use a for loop to create multiple entries and use a standard iteration like a forEach loop it creates a memory leak and leaves the database unusable.
