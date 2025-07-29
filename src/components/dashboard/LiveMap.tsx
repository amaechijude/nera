import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LiveMap() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Live Collection Map
        </CardTitle>
      </CardHeader>
      <CardContent
      className="overflow-hidden scroll-auto"
      >
        {/* <div className="h-80 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <p className="text-muted-foreground">Interactive map would be loaded here</p>
            <p className="text-xs text-muted-foreground">Showing live collection routes and points</p>
          </div>
        </div> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.661214272678!2d6.8952018!3d6.0411383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104397a2734440ef%3A0xe5b226e48b96ad2b!2sICE%20INNOVATION%20HUB!5e0!3m2!1sen!2sng!4v1753786032039!5m2!1sen!2sng"
          width="700"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </CardContent>
    </Card>
  );
}