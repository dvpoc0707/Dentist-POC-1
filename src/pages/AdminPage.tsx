import { useState } from "react";
import { useClinicConfig } from "@/hooks/useClinicConfig";
import { ClinicConfig } from "@/config/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Eye, Lock, Unlock, Copy, Download, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AdminPage = () => {
  const config = useClinicConfig();
  const [isLocked, setIsLocked] = useState(true);
  const [editedConfig, setEditedConfig] = useState<ClinicConfig>(config);

  const handleSave = () => {
    // Generate the config JSON for Vercel environment variable
    const configJson = JSON.stringify(editedConfig);
    const minifiedJson = JSON.stringify(editedConfig); // Already minified
    
    // Copy to clipboard
    navigator.clipboard.writeText(minifiedJson);
    
    toast({
      title: "Configuration Copied!",
      description: "The config JSON has been copied to your clipboard. Paste it into VITE_CLINIC_CONFIG in your Vercel project settings.",
    });

    console.log("Config JSON for Vercel:", minifiedJson);
  };

  const handleDownload = () => {
    // Download as JSON file
    const configJson = JSON.stringify(editedConfig, null, 2);
    const blob = new Blob([configJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `clinic-config-${editedConfig.clinic.name.replace(/\s+/g, "-").toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Config Downloaded!",
      description: "Configuration file has been downloaded. You can use this to set up new Vercel projects.",
    });
  };

  const handleCopyFormatted = () => {
    // Copy formatted JSON for readability
    const formattedJson = JSON.stringify(editedConfig, null, 2);
    navigator.clipboard.writeText(formattedJson);
    
    toast({
      title: "Formatted JSON Copied!",
      description: "Formatted config JSON copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container-narrow">
        {/* Info Alert */}
        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Multi-Tenant Setup</AlertTitle>
          <AlertDescription>
            This CMS helps you manage content for each client. After editing, copy the config JSON and paste it into 
            <strong> VITE_CLINIC_CONFIG</strong> environment variable in each client's Vercel project. Each client gets 
            their own Vercel project with their own domain.
          </AlertDescription>
        </Alert>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-semibold text-foreground mb-2">
              CMS Admin Panel
            </h1>
            <p className="text-muted-foreground">
              Manage content for: <strong>{config.clinic.name}</strong>
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setIsLocked(!isLocked)}
              className="gap-2"
            >
              {isLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
              {isLocked ? "Unlock Editing" : "Lock Editing"}
            </Button>
            <Button variant="outline" onClick={handleCopyFormatted} className="gap-2">
              <Copy className="w-4 h-4" />
              Copy Formatted
            </Button>
            <Button variant="outline" onClick={handleDownload} className="gap-2" disabled={isLocked}>
              <Download className="w-4 h-4" />
              Download JSON
            </Button>
            <Button onClick={handleSave} className="gap-2" disabled={isLocked}>
              <Save className="w-4 h-4" />
              Copy for Vercel
            </Button>
          </div>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList>
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="export">Export Config</TabsTrigger>
          </TabsList>

          {/* Basic Info Tab */}
          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Clinic Information</CardTitle>
                <CardDescription>Update your clinic name and tagline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="clinic-name">Clinic Name</Label>
                  <Input
                    id="clinic-name"
                    value={editedConfig.clinic.name}
                    onChange={(e) =>
                      setEditedConfig({
                        ...editedConfig,
                        clinic: { ...editedConfig.clinic, name: e.target.value },
                      })
                    }
                    disabled={isLocked}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={editedConfig.clinic.tagline}
                    onChange={(e) =>
                      setEditedConfig({
                        ...editedConfig,
                        clinic: { ...editedConfig.clinic, tagline: e.target.value },
                      })
                    }
                    disabled={isLocked}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logo-initial">Logo Initial (for fallback)</Label>
                  <Input
                    id="logo-initial"
                    value={editedConfig.clinic.logo.initial}
                    onChange={(e) =>
                      setEditedConfig({
                        ...editedConfig,
                        clinic: {
                          ...editedConfig.clinic,
                          logo: { ...editedConfig.clinic.logo, initial: e.target.value },
                        },
                      })
                    }
                    disabled={isLocked}
                    maxLength={1}
                    placeholder="S"
                  />
                  <p className="text-xs text-muted-foreground">
                    Note: The logo now uses a dental icon, but this initial is kept for compatibility.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Update phone, email, and address</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={editedConfig.contact.phone}
                      onChange={(e) =>
                        setEditedConfig({
                          ...editedConfig,
                          contact: { ...editedConfig.contact, phone: e.target.value },
                        })
                      }
                      disabled={isLocked}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={editedConfig.contact.email}
                      onChange={(e) =>
                        setEditedConfig({
                          ...editedConfig,
                          contact: { ...editedConfig.contact, email: e.target.value },
                        })
                      }
                      disabled={isLocked}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="street">Street Address</Label>
                  <Input
                    id="street"
                    value={editedConfig.contact.address.street}
                    onChange={(e) =>
                      setEditedConfig({
                        ...editedConfig,
                        contact: {
                          ...editedConfig.contact,
                          address: { ...editedConfig.contact.address, street: e.target.value },
                        },
                      })
                    }
                    disabled={isLocked}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={editedConfig.contact.address.city}
                      onChange={(e) =>
                        setEditedConfig({
                          ...editedConfig,
                          contact: {
                            ...editedConfig.contact,
                            address: { ...editedConfig.contact.address, city: e.target.value },
                          },
                        })
                      }
                      disabled={isLocked}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={editedConfig.contact.address.state}
                      onChange={(e) =>
                        setEditedConfig({
                          ...editedConfig,
                          contact: {
                            ...editedConfig.contact,
                            address: { ...editedConfig.contact.address, state: e.target.value },
                          },
                        })
                      }
                      disabled={isLocked}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input
                      id="zip"
                      value={editedConfig.contact.address.zip}
                      onChange={(e) =>
                        setEditedConfig({
                          ...editedConfig,
                          contact: {
                            ...editedConfig.contact,
                            address: { ...editedConfig.contact.address, zip: e.target.value },
                          },
                        })
                      }
                      disabled={isLocked}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hours">Business Hours</Label>
                  <Textarea
                    id="hours"
                    value={editedConfig.contact.hours.weekdays}
                    onChange={(e) =>
                      setEditedConfig({
                        ...editedConfig,
                        contact: {
                          ...editedConfig.contact,
                          hours: { ...editedConfig.contact.hours, weekdays: e.target.value },
                        },
                      })
                    }
                    disabled={isLocked}
                    placeholder="Mon-Fri: 9AM - 7PM"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
                <CardDescription>Manage your dental services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {editedConfig.services.map((service, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-2">
                      <div className="space-y-2">
                        <Label>Service Title</Label>
                        <Input
                          value={service.title}
                          onChange={(e) => {
                            const newServices = [...editedConfig.services];
                            newServices[index] = { ...service, title: e.target.value };
                            setEditedConfig({ ...editedConfig, services: newServices });
                          }}
                          disabled={isLocked}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                          value={service.description}
                          onChange={(e) => {
                            const newServices = [...editedConfig.services];
                            newServices[index] = { ...service, description: e.target.value };
                            setEditedConfig({ ...editedConfig, services: newServices });
                          }}
                          disabled={isLocked}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Price</Label>
                        <Input
                          value={service.price}
                          onChange={(e) => {
                            const newServices = [...editedConfig.services];
                            newServices[index] = { ...service, price: e.target.value };
                            setEditedConfig({ ...editedConfig, services: newServices });
                          }}
                          disabled={isLocked}
                          placeholder="From $299"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Update hero and about section content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-title">Hero Title</Label>
                  <Input
                    id="hero-title"
                    value={editedConfig.content.hero.title}
                    onChange={(e) =>
                      setEditedConfig({
                        ...editedConfig,
                        content: {
                          ...editedConfig.content,
                          hero: { ...editedConfig.content.hero, title: e.target.value },
                        },
                      })
                    }
                    disabled={isLocked}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={editedConfig.content.hero.subtitle}
                    onChange={(e) =>
                      setEditedConfig({
                        ...editedConfig,
                        content: {
                          ...editedConfig.content,
                          hero: { ...editedConfig.content.hero, subtitle: e.target.value },
                        },
                      })
                    }
                    disabled={isLocked}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Media Tab */}
          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>Add your social media links</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook URL</Label>
                  <Input
                    id="facebook"
                    value={editedConfig.social.facebook || ""}
                    onChange={(e) =>
                      setEditedConfig({
                        ...editedConfig,
                        social: { ...editedConfig.social, facebook: e.target.value },
                      })
                    }
                    disabled={isLocked}
                    placeholder="https://facebook.com/yourpage"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram URL</Label>
                  <Input
                    id="instagram"
                    value={editedConfig.social.instagram || ""}
                    onChange={(e) =>
                      setEditedConfig({
                        ...editedConfig,
                        social: { ...editedConfig.social, instagram: e.target.value },
                      })
                    }
                    disabled={isLocked}
                    placeholder="https://instagram.com/yourpage"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Export Config Tab */}
          <TabsContent value="export">
            <Card>
              <CardHeader>
                <CardTitle>Export Configuration</CardTitle>
                <CardDescription>
                  Copy or download the configuration JSON to use in Vercel environment variables
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Configuration JSON (for Vercel VITE_CLINIC_CONFIG)</Label>
                  <Textarea
                    value={JSON.stringify(editedConfig, null, 2)}
                    readOnly
                    className="font-mono text-sm min-h-[400px]"
                  />
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleSave} className="gap-2">
                    <Copy className="w-4 h-4" />
                    Copy Minified (for Vercel)
                  </Button>
                  <Button onClick={handleCopyFormatted} variant="outline" className="gap-2">
                    <Copy className="w-4 h-4" />
                    Copy Formatted
                  </Button>
                  <Button onClick={handleDownload} variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download JSON File
                  </Button>
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>How to Use This Config</AlertTitle>
                  <AlertDescription>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                      <li>Click "Copy Minified" to copy the JSON</li>
                      <li>Go to your client's Vercel project settings</li>
                      <li>Navigate to Environment Variables</li>
                      <li>Add new variable: <strong>VITE_CLINIC_CONFIG</strong></li>
                      <li>Paste the copied JSON as the value</li>
                      <li>Select all environments (Production, Preview, Development)</li>
                      <li>Redeploy the project</li>
                    </ol>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
