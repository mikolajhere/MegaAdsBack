import { AdRecord } from "../records/ad.record";

test("AdRecord returns data from databse for one entry.", async () => {
  const ad = await AdRecord.getOne("b39fc1b2-a7ec-11ed-a34d-8590429b4279");
  console.log(ad);
  
  expect(ad).toBeDefined();
  expect(ad.id).toBe("b39fc1b2-a7ec-11ed-a34d-8590429b4279");
  expect(ad.name).toBe("Mikołaj Dutkiewicz");
});
test("AdRecord returns null from database for unexisiting entry.", async () => {
  const ad = await AdRecord.getOne("---");
  expect(ad).toBeNull();
});
