
export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  [key: string]: any; 
}


// Fetch Jessica Taylor Only
// ---------------------------------------------
export const fetchJessicaTaylor = async (): Promise<Patient> => {
  const username = "coalition";
  const password = "skills-test";
  const encodedCredentials = btoa(`${username}:${password}`);

  try {
    const response = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Request failed with status ${response.status} (${response.statusText})`
      );
    }

    const data: Patient[] = await response.json();

    const jessica = data.find(
      (p: Patient) => p.name === "Jessica Taylor"
    );

    if (!jessica) {
      throw new Error("Jessica Taylor not found in API response.");
    }

    return jessica;
  } catch (error) {
    console.error("Error while fetching patient data:", error);
    throw error;
  }
};
