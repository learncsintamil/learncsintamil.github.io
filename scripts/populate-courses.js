const fs = require('fs');

const courses = {
  generatedAt: Date.now(),
  data: {}
};
const dataDir = "./data";
const coursesDataDir = dataDir + '/courses';

fs.readdirSync(coursesDataDir).forEach(file => {
  const courseSlug = file.toString().replace(".json", "");
  courses.data[courseSlug] = JSON.parse(fs.readFileSync(coursesDataDir + "/" + file));
});

fs.writeFileSync(dataDir + "/courses.json", JSON.stringify(courses, null, 2));
