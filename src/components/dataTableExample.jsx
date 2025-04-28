import { useState } from "react";

const fakeUsers = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
}));

function DataTableExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Kullanıcıları parçalıyoruz
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = fakeUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(fakeUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>DataTable + Pagination Example 🚀</h1>

      {/* Tablo */}
      <table style={{ margin: "0 auto", width: "60%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#eee" }}>
            <th style={{ border: "1px solid black", padding: "10px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.id}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.name}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sayfa Numaraları */}
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "5px",
              padding: "8px 12px",
              backgroundColor: currentPage === index + 1 ? "#1976d2" : "#eee",
              color: currentPage === index + 1 ? "white" : "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DataTableExample;
