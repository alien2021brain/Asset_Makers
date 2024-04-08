const db = require("../connect");
const moment = require("moment");

const addListings = (req, res) => {
  const q =
    "INSERT INTO listings(`name`,`description`,`address`,`price`,`bathrooms`,`furnished`,`parking`,`type`,`category`,`createdAt`,`restaurant`,`bus`,`school`,`size`,`flore`,`cityId`,`userId`,`bedrooms`) VALUES (?)";

  const property = [
    req.body.name,
    req.body.description,
    req.body.address,
    req.body.price,
    req.body.bathrooms,
    req.body.furnished,
    req.body.parking,
    req.body.type,
    req.body.category,
    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    req.body.restaurant,
    req.body.bus,
    req.body.school,
    req.body.size,
    req.body.floore,
    req.body.city,

    req.userId,
    req.body.bedrooms,
  ];
  const duplicateQuery = "SELECT * FROM listings WHERE name = ? OR address = ?";
  db.query(
    duplicateQuery,
    [req.body.name, req.body.address],
    (error, results) => {
      if (error) {
        console.error("Error checking for duplicate listings:", error.stack);
        return res.status(500).send("Internal Server Error");
      }

      if (results.length > 0) {
        // Listing with the same name or address already exists
        return res
          .status(400)
          .send("A listing with the same name or address already exists.");
      }
      db.query(q, [property], (error, results, fields) => {
        if (error) {
          console.error("Error inserting property: " + error.stack);
          return res.status(400).send(error);
        }

        console.log("Inserted property with id " + results.insertId);

        res.status(200).send(results.insertId.toString());
      });
    }
  );
};
const getListItem = (req, res) => {
  const query = `
  SELECT 
  p.*, 
  GROUP_CONCAT(CONCAT(pi.id, '=', pi.imageUrl)) AS images,
  u.username,
  c.name As citiName
FROM 
  listings p
 JOIN 
  propertyimages pi ON p.id = pi.property_id
 JOIN 
  users u ON p.userId = u.id
 JOIN 
  cities c ON p.cityId = c.Id
GROUP BY 
  p.id;
  `;

  db.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error fetching properties: " + error.stack);
      res.status(500).json({ error: "Error fetching properties" });
      return;
    }

    // Map over each result row to split the images string and create the images array
    const propertiesWithImages = results.map((row) => {
      if (row.images) {
        const imagePairs = row.images.split(","); // Split the string by comma to separate each image pair ["1=http://abc.jpj","2=http://abc2.jpj"]
        const imagesArray = imagePairs.map((pair) => {
          const [id, url] = pair.split("="); // Split the id and url
          return { id: parseInt(id), url };
        });
        return { ...row, images: imagesArray };
      }
    });

    res.json(propertiesWithImages);
  });
};
// get SingleLsit Item
const getListItemId = (req, res) => {
  const { id } = req.params; // Assuming 'itemId' is the parameter name

  const query = `
    SELECT 
      p.*, 
      GROUP_CONCAT(CONCAT(pi.id, '=', pi.imageUrl)) AS images,
      u.username,
      c.name AS cityName
    FROM 
      listings p
    LEFT JOIN 
      propertyimages pi ON p.id = pi.property_id
    LEFT JOIN 
      users u ON p.userId = u.id
    LEFT JOIN 
      cities c ON p.cityId = c.Id
    WHERE 
      p.id = ?
    GROUP BY 
      p.id;
  `;

  db.query(query, [id], (error, results, fields) => {
    if (error) {
      console.error("Error fetching property: " + error.stack);
      res.status(500).json({ error: "Error fetching property" });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: "Property not found" });
      return;
    }

    const row = results[0];
    const imagePairs = row.images.split(",");
    const imagesArray = imagePairs.map((pair) => {
      const [id, url] = pair.split("=");
      return { id: parseInt(id), url };
    });

    const propertyWithImages = { ...row, images: imagesArray };
    res.json(propertyWithImages);
  });
};

// update List
const updateListItem = (req, res) => {
  const propertyId = req.params.id;
  console.log("propertyId", propertyId);
  const {
    name,
    description,
    address,
    price,
    bathrooms,
    furnished,
    parking,
    type,
    category,
    restaurant,
    bus,
    school,
    size,
    floore,
    city,
    bedrooms,
  } = req.body;

  const q =
    "UPDATE listings SET `name` = ?, `description` = ?, `address` = ?, `price` = ?, `bathrooms` = ?, `furnished` = ?, `parking` = ?, `type` = ?, `category` = ?, `restaurant` = ?, `bus` = ?, `school` = ?, `size` = ?, `flore` = ?, `cityId` = ?, `bedrooms` = ? WHERE `id` = ?";

  const propertyValues = [
    name,
    description,
    address,
    price,
    bathrooms,
    furnished,
    parking,
    type,
    category,
    restaurant,
    bus,
    school,
    size,
    floore,
    city,
    bedrooms,
    propertyId,
    req.params.id,
  ];

  const duplicateQuery =
    "SELECT * FROM listings WHERE (name = ? OR address = ?) AND id != ?";
  db.query(duplicateQuery, [name, address, propertyId], (error, results) => {
    if (error) {
      console.error("Error checking for duplicate listings:", error.stack);
      return res.status(500).send("Internal Server Error");
    }

    db.query(q, propertyValues, (error, results, fields) => {
      if (error) {
        console.error("Error updating property: " + error.stack);
        return res.status(400).send(error);
      }

      if (results.affectedRows === 0) {
        // Property with the given ID not found
        return res.status(404).send("Property not found.");
      }

      console.log("Updated property with id " + propertyId);

      res.status(200).send("Property updated successfully");
    });
  });
};
const deleteListItem = (req, res) => {
  const propertyId = req.params.id;
  const query = "DELETE FROM listings WHERE id = ?";
  db.query(query, [propertyId], (error, results, fields) => {
    if (error) {
      console.error("Error deleting property: " + error.stack);
      res.status(500).json({ error: "Error deleting property" });
      return;
    }
    // Check if any rows were affected
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Property not found or already deleted" });
      return;
    }
    res.json({ message: "Property deleted successfully" });
  });
};

// Images Section

// uploading multiple Image
const uploadListItem = (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    const insertQuery =
      "INSERT INTO propertyimages (`imageUrl`,`property_id`) VALUES ?";
    const values = req.files.map((file) => {
      const url = file.path.replace("public", "");
      console.log("url", url);
      return [`${process.env.apiUrl}${url}`, req.params.id];
    });

    // Check if URLs already exist in the database
    const existingUrlsQuery =
      "SELECT imageUrl FROM propertyimages WHERE property_id = ?";
    db.query(existingUrlsQuery, [req.params.id], (err, results) => {
      if (err) {
        console.error("Error retrieving existing URLs from database:", err);
        return res.status(500).send("Internal Server Error");
      }

      const existingUrls = results.map((row) => row.imageUrl);
      const uniqueValues = values.filter(
        (value) => !existingUrls.includes(value[0])
      );

      if (uniqueValues.length === 0) {
        return res.status(400).send("No new images to insert.");
      }

      db.query(insertQuery, [uniqueValues], (err, results) => {
        if (err) {
          console.error("Error inserting URLs into database:", err);
          return res.status(500).send("Internal Server Error");
        }
        res.status(200).send("Images inserted successfully");
      });
    });
  } catch (error) {
    console.error("Error processing file uploads:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete Images
const deleteListImage = (req, res) => {
  const propertyId = req.params.id;

  const deleteQuery = "DELETE FROM propertyimages WHERE id = ?";

  db.query(deleteQuery, [propertyId], (err, results) => {
    if (err) {
      console.error("Error deleting images from database:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.status(200).send("Images deleted successfully");
  });
};

// Update List Image
const updateListImage = (req, res) => {
  const imageId = req.params.id;

  const updateQuery = "UPDATE propertyimages SET `imageUrl` = ? WHERE id = ?";

  const imageUrl = `${process.env.apiUrl}${req.file.path.replace(
    "public",
    ""
  )}`;

  db.query(updateQuery, [imageUrl, imageId], (err, results) => {
    if (err) {
      console.error("Error updating image in database:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.status(200).send("Image updated successfully");
  });
};

module.exports = {
  addListings,
  getListItem,
  updateListItem,
  deleteListItem,
  uploadListItem,
  deleteListImage,
  updateListImage,
  getListItemId,
};
