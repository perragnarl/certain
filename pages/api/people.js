export default function handler(req, res) {
  res.status(200).json([
    {
      data: [
        {
          id: 1,
          name: "<p>John Doe</p><p>john.doe@company.com</p>",
          avatar: "JD",
          department: "Development",
          role: "Front end developer",
        },
        {
          id: 2,
          name: "Jane Doe",
          avatar: "JD",
          department: "Development",
          role: "Front end developer",
        },
        {
          id: 3,
          name: "John Doe",
          avatar: "JD",
          department: "Development",
          role: "Front end developer",
        },
        {
          id: 4,
          name: "John Doe",
          avatar: "JD",
          department: "Development",
          role: "Front end developer",
        },
      ],
    },
    {
      columns: [
        {
          key: "name",
          title: "Name",
        },
        {
          key: "department",
          title: "Department",
        },
        {
          key: "role",
          title: "Role",
        },
        {
          key: "certificate",
          title: "Certificates",
        },
      ],
    },
  ]);
}
