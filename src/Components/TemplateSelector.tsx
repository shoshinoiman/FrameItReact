import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

interface Template {
  id: number;
  name: string;
  image: string;
}

interface TemplateSelectorProps {
  templates?: Template[]; // הוספנו אופציה ל- undefined כדי למנוע שגיאות
  onSelect: (template: Template) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ templates = [], onSelect }) => {
  return (
    <Box sx={{ width: "250px", padding: 2, borderRight: "2px solid #ccc", height: "100vh", overflowY: "auto" }}>
      <Typography variant="h6" gutterBottom>
        בחר תבנית
      </Typography>
      {templates.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          אין תבניות זמינות.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {templates.map((template) => (
            <Grid item xs={12} key={template.id}>
              <Button onClick={() => onSelect(template)} fullWidth variant="outlined">
                <img src={template.image} alt={template.name} width="100%" style={{ borderRadius: 8 }} />
                {template.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TemplateSelector;
