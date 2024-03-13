describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should update server table", function () {
    submitServerInfo();
    updateServerTable();

    let serverTable = serverTbody.querySelectorAll("tr td");

    expect(serverTable.length).toEqual(2);
    expect(serverTable[0].innerText).toEqual("Alice");
    expect(serverTable[1].innerText).toEqual("$0.00");
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
