# JavaScript Test Assignment

This is an assignment to test your JavaScript skills.

## Working on the tests

### Setting up the environment

To work on the tests, you will need to install Node. You can do this via the
[download page](http://nodejs.org/#download) or using
[Homebrew](http://mxcl.github.com/homebrew/) if you are on a Mac.

Note that on Windows, there are some reports that you will need to restart
after installing Node - see #12.

You should then run the following commands from the root directory of this project:

    npm install
    npm start

This should begin a local development server, which can be viewed at `http://localhost:4444`.

### Test Cases

The tests are powered by [Jasmine](http://pivotal.github.com/jasmine/), a Test-Driven Development (TDD) framework. The individual tests are contained in the files in the `spec/` directory, each of which test the corresponding module in the `app/` directory.

The first time you browse to `http://localhost:4444` you should see a bunch of failing tests. To make these tests pass, you need to implement the functions in `app/`. This is the ethos of TDD: write tests, run tests, watch them fail, write code to pass tests.

Each time you implement a function in a module in `app/`, reload the browser window to see if the test is now passing. You may need to refer to the tests in `spec/` to view extra instructions on how to implement the functions to make the tests pass.

If you don't like web browsers, you can run the tests from the command line:

    npm test

### Data-driven tests

There is one data driven test - the JSON data for this can be found in the `data/` directory.

## I've found the answers to the tests online!

Well done.

This assignment is intended to test your suitability as a JavaScript Engineer. The tests are derived from [work done by Rebecca Murphey](https://github.com/rmurphey/js-assessment), and so I'm sure the answers are out there. You can cut and paste, verbatim, but when it comes to marking the work, it will be pretty clear that you've just been cut and pasting.

The Internet is a wonderful resource. We don't expect you to implement the functions from memory, but equally we expect you to complete the work yourself. Use the tools available to you wisely!

# License

Derived from work by [Rebecca Murphey](https://github.com/rmurphey/js-assessment).

This work is licensed under the [Creative Commons Attribution-Share Alike 3.0](http://creativecommons.org/licenses/by-sa/3.0/)
license. You are free to share and remix the work, and to use it for commercial
purposes under the following conditions:

- *Attribution* — You must attribute the work in the manner specified by the
  author or licensor (but not in any way that suggests that they endorse you or
  your use of the work).
- *Share Alike* — If you alter, transform, or build upon this work, you may
  distribute the resulting work only under the same or similar license to this
  one.

Any of these conditions can be waived if you get permission from the copyright
holder.