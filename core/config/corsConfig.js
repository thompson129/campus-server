const allowedOrigins = ["http://localhost:5173"];

export const corsConfig = {
  // origin:"*",
  origin: (origin, callback) => {
    //   if (origin && allowedOrigins.indexOf(origin) !== -1) {
    //     callback(null, true);
    //   } else {
    //     callback(new Error("Not allowed by CORS"));
    //   }
    // },
    return callback(null, true);
  },

  // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ["Content-Type", "Authorization", "authorization"],
  exposedHeaders: ["Authorization"],
  optionsSuccessStatus: 200,
  credentials: true,
};
