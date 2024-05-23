# Getting Started

## Resources

- [installation](https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project-installing-rails)
- [ruby guide](https://mac.install.guide/ruby/13)
- [data types](https://guides.rubyonrails.org/v3.2/migrations.html)
- [associations](https://guides.rubyonrails.org/association_basics.html)
- [ruby gems](https://rubygems.org/)
  - `bundle install`

## What is it?

### MVC architecture

- Model: databases
- View: webpages
- Controller: brains, business logic

### Folder structure

- app
  - assets
    - stylesheets
  - controllers
  - config
    - routes.rb
  - db
  - models
  - views
- Gemfile

### Generators

- `rails g controller`

  - creates
    - controller
    - route
    - view
    - helper
    - test
    - scss

- `rails g scaffold`

  - creates a db table
    - migration
    - testing
    - routes
    - controllers
    - views
    - css

- `rails db:migrate`: create schema file and push everything

### Templating

- to include partials `<%= render 'home/header' %>`
- to include links `  <%= link_to 'Friend App', root_path, class:"navbar-brand" %>`
  - we can get the paths by typing in the terminal `rails routes` or `controller_pagename_path`

### Associations

Associate tables

### Controllers

- `before_action`: runs before the code in the controller runs
