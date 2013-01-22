
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

// SVG-to-WKT 0.0.1
// (c) 2013 David McClure
// http://dclure.org


describe('line', function() {

  it('should construct a LINESTRING WKT shape', function() {
    expect(SVGtoWKT.line(1, 2, 3, 4)).toEqual(
      'LINESTRING(1 2,3 4)'
    );
  });

});