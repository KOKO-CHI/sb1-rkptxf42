<form
  action="https://formspree.io/f/mkgbawbq"
  method="POST"
  className="space-y-6"
>
  {/* Anti-spam */}
  <input type="text" name="_honey" className="hidden" />

  {/* Sujet email personnalisé */}
  <input type="hidden" name="_subject" value="Nouveau message depuis le site" />

  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2">
      Nom complet *
    </label>
    <input
      id="name"
      name="name"
      type="text"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Votre nom complet"
    />
  </div>
  <div>
    <label htmlFor="phone" className="block text-sm font-medium mb-2">
      Téléphone *
    </label>
    <input
      id="phone"
      name="phone"
      type="tel"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Votre numéro de téléphone"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Email *
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      placeholder="votre@email.com"
    />
  </div>
  <div>
    <label htmlFor="service" className="block text-sm font-medium mb-2">
      Service demandé *
    </label>
    <select
      id="service"
      name="service"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Choisir un service</option>
      <option value="Nettoyage résidentiel">Nettoyage résidentiel</option>
      <option value="Nettoyage commercial">Nettoyage commercial</option>
      <option value="Nettoyage post-construction">Nettoyage post-construction</option>
      <option value="Nettoyage de fin de bail">Nettoyage de fin de bail</option>
      <option value="Nettoyage de printemps">Nettoyage de printemps</option>
      <option value="Autre">Autre</option>
    </select>
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Message additionnel
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Décrivez vos besoins spécifiques…"
    />
  </div>
  <button
    type="submit"
    className="w-full btn-primary flex items-center justify-center space-x-2"
  >
    Envoyer la demande
  </button>
</form>

