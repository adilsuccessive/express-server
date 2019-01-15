# <p align="center"> Client-server Architecture
## Introduction
Client–server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.Often clients and servers communicate over a computer network on separate hardware, but both client and server may reside in the same system. A server host runs one or more server programs which share their resources with clients. A client does not share any of its resources, but requests a server's content or service function. Clients therefore initiate communication sessions with servers which await incoming requests. Examples of computer applications that use the client–server model are Email, network printing, and the World Wide Web.


![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1280px-Client-server-model.svg.png)
## Client and server role
The client-server characteristic describes the relationship of cooperating programs in an application. The server component provides a function or service to one or many clients, which initiate requests for such services. Servers are classified by the services they provide. For example, a web server serves web pages and a file server serves computer files. A shared resource may be any of the server computer's software and electronic components, from programs and data to processors and storage devices. The sharing of resources of a server constitutes a service.
Whether a computer is a client, a server, or both, is determined by the nature of the application that requires the service functions. For example, a single computer can run web server and file server software at the same time to serve different data to clients making different kinds of requests. Client software can also communicate with server software within the same computer.Communication between servers, such as to synchronize data, is sometimes called inter-server or server-to-server communication.
## How a request get served
HTTP (Hypertext Transfer Protocol) is a communication protocol used to send data from one program to another over the internet. At one end of the data transfer is a server and at the other end is a client. The client is often browser-based (either a user typing in a browser or a script running in a browser), but might also be a standalone program.
The server binds to a host and port (it makes an exclusive connection to an IP address and a port number). Then the server listens for requests. Because of Dart’s asynchronous nature, the server can handle many requests at a single time, as follows:
* Server listens
* Client connects
* Server accepts and receives request (and continues to listen)
* Server can continue to accept other requests
* Server writes response of request or several, possibly interleaved, requests
* Server finally ends (closes) the response(s).
