const express = require("express");


const app = express();

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{

  console.log(`server started runing on ${PORT}`)
}) 



const drugs = [
  // Drugs array as provided
];

// 1. GET /drugs/antibiotics
app.get('/drugs/antibiotics', (req, res) => {
  const antibiotics = drugs.filter(drug => drug.category === 'Antibiotic');
  res.json(antibiotics);
});

// 2. GET /drugs/names
app.get('/drugs/names', (req, res) => {
  const names = drugs.map(drug => drug.name.toLowerCase());
  res.json(names);
});

// 3. POST /drugs/by-category
app.post('/drugs/by-category', (req, res) => {
  const { category } = req.body;
  const filteredDrugs = drugs.filter(drug => drug.category === category);
  res.json(filteredDrugs);
});

// 4. GET /drugs/names-manufacturers
app.get('/drugs/names-manufacturers', (req, res) => {
  const namesManufacturers = drugs.map(drug => ({
    name: drug.name,
    manufacturer: drug.manufacturer,
  }));
  res.json(namesManufacturers);
});

// 5. GET /drugs/prescription
app.get('/drugs/prescription', (req, res) => {
  const prescriptionDrugs = drugs.filter(drug => drug.isPrescriptionOnly);
  res.json(prescriptionDrugs);
});

// 6. GET /drugs/formatted
app.get('/drugs/formatted', (req, res) => {
  const formattedDrugs = drugs.map(drug => `Drug: ${drug.name} - ${drug.dosageMg}mg`);
  res.json(formattedDrugs);
});

// 7. GET /drugs/low-stock
app.get('/drugs/low-stock', (req, res) => {
  const lowStockDrugs = drugs.filter(drug => drug.stock < 50);
  res.json(lowStockDrugs);
});

// 8. GET /drugs/non-prescription
app.get('/drugs/non-prescription', (req, res) => {
  const nonPrescriptionDrugs = drugs.filter(drug => !drug.isPrescriptionOnly);
  res.json(nonPrescriptionDrugs);
});

// 9. POST /drugs/manufacturer-count
app.post('/drugs/manufacturer-count', (req, res) => {
  const { manufacturer } = req.body;
  const count = drugs.filter(drug => drug.manufacturer === manufacturer).length;
  res.json({ manufacturer, count });
});

// 10. GET /drugs/count-analgesics
app.get('/drugs/count-analgesics', (req, res) => {
  const analgesicsCount = drugs.filter(drug => drug.category === 'Analgesic').length;
  res.json({ category: 'Analgesic', count: analgesicsCount });
});








  