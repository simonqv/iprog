
Emm Nilsson 93341, https://kth-se.zoom.us/j/8837489941
Simon Larspers Qvist 53464 https://kth-se.zoom.us/j/6255496651

Github: https://gits-15.sys.kth.se/iprog-students/emm2-simonqv-ht23-2_3


# 2 questions:
* "If promiseState.promise is truthy, cancel the promise". Would you use AbortController to do that, how?
* In resolvePromise, if we have a promsie and another one is incoming, won't we "forget" the newer one, to avoid race conditon? What happens with the newer one, don't we want to execute it since it's the latest information?


# 2 questions w/ answers:
* What is suspense?
    The time between receiving a promise without data/error and receiving the data/error. We're waiting for the asynchronous response (fetch) to complete.
* What is serialization/deserialization?
    Serialization is to convert an object into a string.
    Deserializatios is the opposite, to convert a string to an object.