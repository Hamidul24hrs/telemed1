// JavaScript can be used to add interactivity later if needed
console.log("Telemedicine Home Page Loaded!");
function findDoctors() {
  const locationInput = document.getElementById('locationInput').value;
  const doctorsList = document.getElementById('doctorsList');

  if (!locationInput) {
    doctorsList.innerHTML = '<p style="color: red;">Please enter a location.</p>';
    return;
  }

  // Mock data for demonstration (Replace with API call or backend integration)
  const mockDoctors = [
    { name: "Dr. John Doe", specialty: "Cardiology", location: "New York" },
    { name: "Dr. Sarah Smith", specialty: "Dermatology", location: "Los Angeles" },
    { name: "Dr. Mark Johnson", specialty: "General Physician", location: "New York" },
  ];

  const filteredDoctors = mockDoctors.filter(doctor =>
    doctor.location.toLowerCase().includes(locationInput.toLowerCase())
  );

  if (filteredDoctors.length > 0) {
    doctorsList.innerHTML = filteredDoctors
      .map(doctor => `<p>${doctor.name} - ${doctor.specialty}</p>`)
      .join('');
  } else {
    doctorsList.innerHTML = '<p>No doctors found in this location.</p>';
  }
}
