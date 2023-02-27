package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
)

var (
	port = flag.Int("port", 3000, "The server port")
)

func main() {
	flag.Parse()

	mux := http.NewServeMux()

	fs := http.FileServer(
		http.Dir("./public"),
	)

	mux.Handle("/", fs)

	addr := fmt.Sprintf("localhost:%d", *port)

	log.Printf("Listening %s", addr)

	log.Fatal(
		http.ListenAndServe(addr, mux),
	)
}
