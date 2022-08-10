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
- [x] k6 script

## Notes

Inside k6 folder there is a script that can be used with [k6](https://k6.io/) load testing tool

```
k6 run --iterations 210 k6/script.js
```

or inside docker container

```
docker run --rm -v d:/k6:/src -i grafana/k6 run --iterations 210 /src/script.js
```

which will lead to similar result

```
█ Basic API test

  ✗ expected API status code to equal 200
  ↳  95% — ✓ 200 / ✗ 10
  ✓ has valid json body
  ✗ expected title length to be above 20
  ↳  88% — ✓ 177 / ✗ 23

checks.........................: 94.59% ✓ 577       ✗ 33
data_received..................: 120 kB 6.4 kB/s
data_sent......................: 9.9 kB 531 B/s
group_duration.................: avg=88.87ms  min=49.47ms med=63.51ms max=813.98ms p(90)=181.93ms p(95)=246.56ms
http_req_blocked...............: avg=493.72µs min=300ns   med=400ns   max=103.59ms p(90)=600ns    p(95)=600ns
http_req_connecting............: avg=233.25µs min=0s      med=0s      max=48.98ms  p(90)=0s       p(95)=0s
http_req_duration..............: avg=85.51ms  min=46.63ms med=60.68ms max=811.13ms p(90)=179.44ms p(95)=243.65ms
  { expected_response:true }...: avg=84.21ms  min=46.63ms med=60.65ms max=811.13ms p(90)=131ms    p(95)=244.72ms
http_req_failed................: 4.76%  ✓ 10        ✗ 200
http_req_receiving.............: avg=208.05µs min=49.9µs  med=91µs    max=8.34ms   p(90)=129.09µs p(95)=634.82µs
http_req_sending...............: avg=106.71µs min=61.7µs  med=102.5µs max=327.7µs  p(90)=134.26µs p(95)=152.23µs
http_req_tls_handshaking.......: avg=244.81µs min=0s      med=0s      max=51.41ms  p(90)=0s       p(95)=0s
http_req_waiting...............: avg=85.19ms  min=46.47ms med=60.5ms  max=810.93ms p(90)=179.26ms p(95)=243.44ms
http_reqs......................: 210    11.244851/s
iteration_duration.............: avg=88.9ms   min=49.48ms med=63.53ms max=814ms    p(90)=181.95ms p(95)=246.6ms
iterations.....................: 210    11.244851/s
vus............................: 1      min=1       max=1
vus_max........................: 1      min=1       max=1
```
