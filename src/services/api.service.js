import http from "../api-conexion";

class CrudService {

  getAllCountries() {
    return http.get("/timezone");
  }
  getTimeZoneCountrie(countrie) {
    return http.get(`/timezone/${countrie}`);
  }
  create(data) {
    return http.post("/tutorials", data);
  }
  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }
  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }
  deleteAll() {
    return http.delete(`/tutorials`);
  }
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new CrudService();