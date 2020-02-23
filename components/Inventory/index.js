package raffle

service Inventory {
	rpc Product (ProductRequest) returns (ProductRequest) {};
}

message ProductRequest {
	Product product = 1;
}

message Product {
	int32 id = 1;
	string slug = 2;
	string description = 3;
	int32 price = 4;
}