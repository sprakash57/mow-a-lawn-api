## Basics

> These questions have multiple correct answers. They are meant to test your knowledge.

**What is "N + 1" problem in REST APIs and how would you solve it?**

In this app we have user profile with fields like name, email and password. It may happen that we need to add more user-centric nested information in the API for the  sake of UI. Now if i want to fetch only single user then i will hava to call `/users/{id}`. So for `N` number of users i will call them individually N more times and that will lead to `N+1 problem`.

Solutions could be -
- Paraller API calls
- Add more information at top level of the API
- Usage of cache as middleware

**When do you stop writing unit tests?**

- If you have already covered the desired coverage.
- If testing ETA is about to expire.
- If Defects/Bug raising rate is lower than the prescribed level.
- If test summary documents are already shared across after you covered all the test scenarios.

**Why would one use monorepos?**

- For eaiser and faster code refactoring.
- All the source code at one place.
- Easy collaboration and better visibility among team members.
- If you want reuse and share your code easily.

**What is Liskov substitution principle?**

If `B` is child class of `A`, then instances of A can be replaced with instances of `B` without altering any existing behaviour of the class. That means
object of type `B` may substitute object of type `A`.

**How do you avoid race conditions?**

Propose a synchronize way to access the data in mutli-threaded environment or use locks.

**What is the first thing you do when you encounter a bug**

- Double check before reporting it.
- Communicate with the developer first before filing it.

## Future of lawn mowing endeavours

> This section has no correct answers. Albeit optional, your answers will help us understand your thinking process.

**What other features would you like to add?**

- Proper Authentication.
- Detailed API documentation (Already did some of it).
- Complete unit and end to end testing.

**How would you handle user authentication?**

- Using JWT and bcryptjs or
- Use cloud services like AWS cognito user pool

**How would you deploy the solution in an enterprise environment?**

- Use Docker containers.
- User CI/CD pipeline.
