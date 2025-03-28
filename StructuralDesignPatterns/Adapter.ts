//The Adapter pattern allows incompatible interfaces to work together by converting one interface into another expected by the client.

// Existing XML-based service
class XMLService {
    getDataInXML() {
      return "<book><title>Design Patterns</title></book>";
    }
  }
  
  // Adapter to convert XML to JSON
  class JSONAdapter {
    private xmlService: XMLService;
  
    constructor(xmlService: XMLService) {
      this.xmlService = xmlService;
    }
  
    getDataInJSON() {
      const xmlData = this.xmlService.getDataInXML();
      // Converting XML to JSON (simulated)
      return { book: { title: "Design Patterns" } };
    }
  }
  
  // Client Code
  const xmlService = new XMLService();
  const jsonAdapter = new JSONAdapter(xmlService);
  console.log(jsonAdapter.getDataInJSON());
  