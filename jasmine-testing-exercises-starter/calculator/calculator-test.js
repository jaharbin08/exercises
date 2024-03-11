describe("calculateMonthlyPayment", function () {
  it("should calculate the monthly rate correctly", function () {
    const values = { amount: 5000, years: 20, rate: 5.5 };
    expect(calculateMonthlyPayment(values)).toEqual("34.39");
  });

  it("should return a result with 2 decimal places", function () {
    const values = { amount: 4942, years: 20, rate: 5.5 };
    expect(calculateMonthlyPayment(values)).toEqual("34.00");
  });
});
/// etc
