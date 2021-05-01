const Module = require("/home/runner/work/jessica/jessica/build/src/javascript/wasm/jessica.js");

  const consoleSpy = jest.spyOn(console, 'log');
test('VerticalEccentric', async () => {
Module().then(async instance => {
    const vert1 = new instance.VerticalEccentricDeco();
  expect(vert1.GetE()).toBeNaN();
  expect(vert1.GetV()).toBeNaN();
  const vert2 = vert1.SetE(0.2);
  expect(vert2.GetE()).toBe(0.2);
  expect(vert2.GetV()).toBeNaN();
  const vert3 = vert2.SetV(100);
  expect(vert3.GetE()).toBe(0.2);
  expect(vert3.GetV()).toBe(100);
  const vert4 = vert3.Clone();
  expect(vert4.GetE()).toBe(vert3.GetE());
  expect(vert4.GetV()).toBe(vert3.GetV());
});
});

test('FoundationStrip', async () => {
  const consoleSpy = jest.spyOn(console, 'log');
Module().then(async instance => {
    const foundation = new instance.FoundationStripDeco();
  expect(foundation.GetB()).toBeNaN();
  const foundation2 = foundation.SetE(1.0);
  expect(foundation2.GetB()).toBe(1.0);
  const foundation3 = foundation2.Clone();
  expect(foundation3.GetB()).toBe(foundation2.GetB());
});
});

test('CalcMeyehof', async () => {
  const consoleSpy = jest.spyOn(console, 'log');
Module().then(async instance => {
    const foundation = new instance.FoundationStripDeco().SetB(1.0);
    const vert = new instance.VerticalEccentricDeco().SetV(100000.).SetE(0.25);

    const calc = new instance.MeyerhofShallowFoundationDeco(vert, foundation);
  expect(calc.GetB_()).toBe(0.5);
  expect(calc.GetQref()).toBe(200000.);
});
});
