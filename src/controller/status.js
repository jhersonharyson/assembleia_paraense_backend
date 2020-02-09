exports.status = (req, res) => {
  const response = {
    api: "server template api",
    version: "1.0.0",
    status: "OK"
  };
  console.log("GET status ok");
  res.send(response);
};

