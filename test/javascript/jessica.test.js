const jessica = require('/home/runner/work/jessica/jessica/build/src/javascript/wasm/jessica.js');

jest.spyOn(console, 'log');

test('WarmUpJessica', async () => {
  jessica().then(async (instance) => {
  });
});


test('VerticalEccentric', async () => {
  jessica().then(async (instance) => {
    const vert1 = new instance.VerticalEccentricDeco();
    expect(vert1.getE()).toBeNaN();
    expect(vert1.getV()).toBeNaN();
    const vert2 = vert1.setE(0.2);
    expect(vert2.getE()).toBe(0.2);
    expect(vert2.getV()).toBeNaN();
    const vert3 = vert2.setV(100);
    expect(vert3.getE()).toBe(0.2);
    expect(vert3.getV()).toBe(100);
    const vert4 = vert3.clone();
    expect(vert4.getE()).toBe(vert3.getE());
    expect(vert4.getV()).toBe(vert3.getV());
  });
});

test('FoundationStrip', async () => {
  jessica().then(async (instance) => {
    const foundation = new instance.FoundationStripDeco();
    expect(foundation.getB()).toBeNaN();
    const foundation2 = foundation.setB(1.0);
    expect(foundation2.getB()).toBe(1.0);
    const foundation3 = foundation2.clone();
    expect(foundation3.getB()).toBe(foundation2.getB());
  });
});

test('CalcMeyehof', async () => {
  jessica().then(async (instance) => {
    const foundation = new instance.FoundationStripDeco().setB(1.0);
    const vert = new instance.VerticalEccentricDeco().setV(100000.).setE(0.25);

    const calc = new instance.MeyerhofShallowFoundationDeco(vert, foundation);
    expect(calc.getB_()).toBe(0.5);
    expect(calc.getQref()).toBe(200000.);
  });
});
