const apiURL = 'https://paas-dot-sse2020-297213.ew.r.appspot.com/api/';

function jsonCounter(name, value) {
  return { name, value };
}

module.exports = {
  fetchCounter: async (id) => {
    try {
      const response = await fetch(apiURL + id);
      if (response.ok) {
        const value = await response.text();
        return jsonCounter(id, value);
      } else {
        console.log(response);
        return jsonCounter(id, 'ERROR');
      }
    } catch (e) {
      console.log(e);
      return jsonCounter(id, 'ERROR');
    }
  }
}