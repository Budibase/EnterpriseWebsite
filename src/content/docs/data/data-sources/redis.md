---
title: "Redis"
description: "Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine. More information can be found in the official Redis docs. Connect Add a data source and select Redis. You will then be prompted to provide the URL, port, username\u2026"
sourceUrl: "https://docs.budibase.com/docs/redis"
---
# Redis

Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine.

More information can be found in the [official Redis docs](https://redis.io/docs/about/).

## Connect

Add a data source and select Redis.

You will then be prompted to provide the URL, port, username and password. The default database index is 0.

> 📘
>
> ### Connecting to a local docker instance
>
> If you are hosting Redis locally with docker, then use **host.docker.internal**

## Redis Command

Select `Redis Command` from the *Function* dropdown. You will now be able to enter any valid Redis command into the query box below.

This is the recommended function as it is the most flexible. The basic commands can be found below.

For more information on the range of Redis data types and commands, click [here](https://redis.io/docs/data-types/).

### Create

This is the equivalent of Redis' SET command. Enter a **key / string value** pair.

**Ttl** stands for *Time-to-live* and is the number of seconds that the data structure will exist. Leave this blank if you want your key/value to never expire.

Only **strings** are supported by this function.

### Read

This is the equivalent of Redis' GET command. Simply enter a **key** you want to get. The response will return the mapped value.

### Delete

This is the equivalent of Redis' DEL command, except you can only delete a single **key** at a time.
