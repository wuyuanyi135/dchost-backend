#!/bin/sh
DRIVER_PORT=8081
ADMIN_PORT=8080

rethinkdb --http-port $ADMIN_PORT --driver-port $DRIVER_PORT