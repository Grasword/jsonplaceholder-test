## Test automation project for service [JSON Placeholder](https://jsonplaceholder.typicode.com/)

[![api](https://github.com/grasword/jsonplaceholder-test/actions/workflows/api.yml/badge.svg)](https://github.com/grasword/jsonplaceholder-test/actions/workflows/api.yml)

## About

This is a set of simple tests running against json placeholder api service and validating responses and resulting data.

## Installation

1. clone repo
2. install dependencies with `npm install`
3. run `npm test`

## Usage

There is two test suits included, one for testing the endpoints to follow the common rest api patterns

```
npm test
```

and another one for testing data (see below)

```
npm run test-data
```

## Task description

The following requirements were supplied by the client and were implemented:

- [x] REST API
  - [x] returns 200 on valid entry request
  - [x] returns 404 on invalid entry request
  - [x] response body conforms to the spec
  - [x] snapshot tests with property matchers
  - [x] change data to specific format
  - [x] limit response size to 120 elements
  - [x] github actions config for automated tests
- [x] DATA
  - [x] simple brute force solution
  - [x] optimized solution with minimum array pass trough
  - [x] optimized solution with concurrent requests to api
  - [x] separate tests for each `todo` entity using `test.each`
  - [x] separate github actions workflow
