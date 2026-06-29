(function () {
  'use strict';

  var TOPICS = [
    {"id":"analysis","name":"Analysis","parent":null},
    {"id":"analysis-grundfunktionen","name":"Grundfunktionen & Eigenschaften","parent":"analysis"},
    {"id":"analysis-potenz-ganzrational","name":"Potenz- & ganzrationale Funktionen","parent":"analysis-grundfunktionen"},
    {"id":"analysis-wurzel","name":"Wurzelfunktionen","parent":"analysis-grundfunktionen"},
    {"id":"analysis-trigonometrisch","name":"Trigonometrische Funktionen (sin, cos)","parent":"analysis-grundfunktionen"},
    {"id":"analysis-gebrochen-rational","name":"Gebrochen-rationale Funktionen","parent":"analysis-grundfunktionen"},
    {"id":"analysis-exponential","name":"Natürliche Exponentialfunktion","parent":"analysis-grundfunktionen"},
    {"id":"analysis-ln","name":"Natürliche Logarithmusfunktion","parent":"analysis-grundfunktionen"},
    {"id":"analysis-allg-exp","name":"Allgemeine Exponentialfunktionen","parent":"analysis-grundfunktionen"},
    {"id":"analysis-parameter","name":"Parameterwirkungen","parent":"analysis-grundfunktionen"},
    {"id":"analysis-verkettung","name":"Zusammengesetzte Funktionen","parent":"analysis-grundfunktionen"},
    {"id":"analysis-umkehrfunktion","name":"Umkehrfunktion","parent":"analysis-grundfunktionen"},
    {"id":"analysis-differential","name":"Differentialrechnung","parent":"analysis"},
    {"id":"analysis-ableitung","name":"Ableitungsbegriff & höhere Ableitungen","parent":"analysis-differential"},
    {"id":"analysis-produktregel","name":"Produktregel","parent":"analysis-differential"},
    {"id":"analysis-kettenregel","name":"Kettenregel","parent":"analysis-differential"},
    {"id":"analysis-kurvenuntersuchung","name":"Kurvenuntersuchung (Nullstellen, Symmetrie, Asymptoten)","parent":"analysis-differential"},
    {"id":"analysis-monotonie-kruemmung","name":"Monotonie & Krümmungsverhalten","parent":"analysis-differential"},
    {"id":"analysis-extrem-wendepunkte","name":"Extrem- & Wendepunkte","parent":"analysis-differential"},
    {"id":"analysis-extremwert","name":"Extremwertprobleme (mit/ohne Nebenbedingungen)","parent":"analysis-differential"},
    {"id":"analysis-integral","name":"Integralrechnung","parent":"analysis"},
    {"id":"analysis-stammfunktion","name":"Stammfunktionen (Summen-, Faktorregel, lineare Substitution)","parent":"analysis-integral"},
    {"id":"analysis-hauptsatz","name":"Hauptsatz der Differential- & Integralrechnung","parent":"analysis-integral"},
    {"id":"analysis-flaeche","name":"Flächenberechnung (auch unbegrenzte Flächen)","parent":"analysis-integral"},
    {"id":"analysis-bestand","name":"Rekonstruierter Bestand","parent":"analysis-integral"},
    {"id":"analysis-rotation","name":"Volumen von Rotationskörpern","parent":"analysis-integral"},
    {"id":"analysis-scharen","name":"Funktionenscharen","parent":"analysis"},
    {"id":"geometrie","name":"Analytische Geometrie","parent":null},
    {"id":"geometrie-vektoren","name":"Vektorrechnung","parent":"geometrie"},
    {"id":"geometrie-vektor","name":"Vektor, Ortsvektor, Linearkombination","parent":"geometrie-vektoren"},
    {"id":"geometrie-betrag","name":"Betrag eines Vektors","parent":"geometrie-vektoren"},
    {"id":"geometrie-geraden","name":"Geraden (Parameterform)","parent":"geometrie"},
    {"id":"geometrie-ebenen","name":"Ebenen (Parameter-, Koordinaten-, Normalenform)","parent":"geometrie"},
    {"id":"geometrie-scharen","name":"Geraden- & Ebenenscharen","parent":"geometrie"},
    {"id":"geometrie-lage","name":"Lagebeziehungen (Punkt, Gerade, Ebene)","parent":"geometrie"},
    {"id":"geometrie-skalarprodukt","name":"Skalarprodukt, Vektorprodukt, Orthogonalität","parent":"geometrie"},
    {"id":"geometrie-spiegelung","name":"Spiegelungen & Symmetrie","parent":"geometrie"},
    {"id":"geometrie-abstand-winkel","name":"Abstands- & Winkelberechnungen","parent":"geometrie"},
    {"id":"geometrie-abstand-windschief","name":"Abstand windschiefer Geraden","parent":"geometrie-abstand-winkel"},
    {"id":"geometrie-flaeche-volumen","name":"Flächen- & Volumenberechnungen","parent":"geometrie"},
    {"id":"geometrie-zeichnung","name":"Zeichnerische Darstellung (Schrägbilder, Spurpunkte)","parent":"geometrie"},
    {"id":"geometrie-bewegungen","name":"Bewegungen im Raum","parent":"geometrie"},
    {"id":"stochastik","name":"Stochastik","parent":null},
    {"id":"stochastik-kombinatorik","name":"Elementare Kombinatorik","parent":"stochastik"},
    {"id":"stochastik-zufallsexperiment","name":"Mehrstufige Zufallsexperimente","parent":"stochastik"},
    {"id":"stochastik-baumdiagramm","name":"Baumdiagramme & Pfadregeln","parent":"stochastik-zufallsexperiment"},
    {"id":"stochastik-vierfeldertafel","name":"Vierfeldertafeln","parent":"stochastik-zufallsexperiment"},
    {"id":"stochastik-bedingte-ws","name":"Bedingte Wahrscheinlichkeit","parent":"stochastik"},
    {"id":"stochastik-unabhaengigkeit","name":"Stochastische Unabhängigkeit","parent":"stochastik"},
    {"id":"stochastik-zufallsgroesse","name":"Diskrete Zufallsgrößen","parent":"stochastik"},
    {"id":"stochastik-erwartungswert","name":"Erwartungswert","parent":"stochastik-zufallsgroesse"},
    {"id":"stochastik-binomial","name":"Binomialverteilung","parent":"stochastik"},
    {"id":"stochastik-bernoulli","name":"Bernoulli-Formel","parent":"stochastik-binomial"},
    {"id":"stochastik-binomial-erwartung","name":"Erwartungswert & Standardabweichung","parent":"stochastik-binomial"},
    {"id":"stochastik-histogramm","name":"Histogramme","parent":"stochastik-binomial"},
    {"id":"stochastik-hypothesentest","name":"Testen von Hypothesen","parent":"stochastik"},
    {"id":"stochastik-test-einseitig","name":"Einseitiger Test","parent":"stochastik-hypothesentest"},
    {"id":"stochastik-test-zweiseitig","name":"Zweiseitiger Test","parent":"stochastik-hypothesentest"},
    {"id":"stochastik-test-fehler","name":"Fehler 1. & 2. Art","parent":"stochastik-hypothesentest"},
    {"id":"stochastik-normalverteilung","name":"Normalverteilung","parent":"stochastik"},
    {"id":"stochastik-normal-dichte","name":"Dichtefunktion","parent":"stochastik-normalverteilung"},
    {"id":"stochastik-normal-glocke","name":"Glockenkurve","parent":"stochastik-normalverteilung"},
    {"id":"lineare-algebra","name":"Lineare Algebra","parent":"geometrie"}
  ];

  var THEMEN = [
    {
      area: 'analysis', label: 'Analysis',
      intro: 'Die Analysis untersucht das Verhalten von Funktionen und deren Graphen. Hier musst du sowohl algorithmische Kurvendiskussionen beherrschen als auch reale Prozesse mathematisch modellieren k\u00f6nnen.',
      methods: [
        { title: 'Differenzieren & Ableitungsregeln', desc: 'Pflichtteil-Klassiker – die Grundlage f\u00FCr alles Weitere.',
          items: ['Potenz-, Faktor- und Summenregel', 'Produktregel: f(x) = u(x)\u00B7v(x) \u21D2 f\u2032(x) = u\u2032(x)\u00B7v(x) + u(x)\u00B7v\u2032(x)', 'Kettenregel (\u201E\u00E4u\u00DFere mal innere Ableitung\u201C): f(x) = u(v(x)) \u21D2 f\u2032(x) = u\u2032(v(x))\u00B7v\u2032(x)'] },
        { title: 'Umfassende Kurvendiskussion & Geometrie der Graphen',
          items: ['Symmetrie: Achsensymmetrie zur y-Achse (f(\u2212x)=f(x)) oder Punktsymmetrie (f(\u2212x)=\u2212f(x))', 'Verhalten im Unendlichen: Grenzwertbestimmung (lim f(x) f\u00FCr x\u2192\u00B1\u221E) f\u00FCr Asymptoten', 'Charakteristische Punkte: Nullstellen (f(x)=0), Extrempunkte (f\u2032(x)=0 mit VZW oder f\u2033(x)\u22600) und Wendepunkte (f\u2033(x)=0 mit f\u2033\u2032(x)\u22600)', 'Tangenten- und Normalengleichungen aufstellen'] },
        { title: 'Integralrechnung & ihre Anwendungen',
          items: ['Hauptsatz der Differential- und Integralrechnung: Stammfunktionen bestimmen', 'Fl\u00E4chenberechnung: Fl\u00E4che zwischen Graph und x-Achse (Vorsicht bei Vorzeichenwechsel!) sowie Fl\u00E4che zwischen zwei Graphen', 'Rotationsvolumen: V = \u03C0 \u00B7 \u222B [f(x)]\u00B2 dx', 'Mittelwert: Bestimmung des durchschnittlichen Funktionswertes auf einem Intervall'] },
        { title: 'Modellierung, Rekonstruktion & Wachstum',
          items: ['Steckbriefaufgaben: Funktionen aus gegebenen Eigenschaften aufstellen (LGS nutzen)', 'Extremwertprobleme mit Nebenbedingungen: Zielfunktion aufstellen, Nebenbedingung einsetzen, Maximum/Minimum berechnen', 'Wachstumsmodelle: Unterscheidung von linearem, exponentiellem und beschr\u00E4nktem Wachstum (S\u00E4ttigungsgrenze)'] }
      ]
    },
    {
      area: 'geometrie', label: 'Analytische Geometrie & Lineare Algebra',
      intro: 'In diesem Bereich werden geometrische Probleme im Raum (R\u00B3) durch die algebraischen Werkzeuge von Vektoren, Gleichungssystemen und Matrizen gel\u00F6st.',
      methods: [
        { title: 'Vektorgeometrische Grundlagen',
          items: ['Lineare Abh\u00E4ngigkeit: Pr\u00FCfen, ob Vektoren kollinear (parallel) oder komplanar (in einer Ebene) sind', 'Skalarprodukt: Orthogonalit\u00E4tspr\u00FCfung (a\u00B7b=0 \u21D4 Vektoren stehen senkrecht zueinander)', 'Kreuzprodukt (Vektorprodukt): Berechnen eines senkrechten Normalenvektors; wichtig f\u00FCr den Fl\u00E4cheninhalt von Parallelogrammen und Dreiecken im Raum'] },
        { title: 'Darstellungsformen von Geraden und Ebenen',
          items: ['Parameterform (Punkt + Richtungsvektoren) f\u00FCr Geraden und Ebenen', 'Koordinatenform (ax+by+cz=d) und Normalenform einer Ebene', 'Umwandlungsprozesse zwischen den Formen (insb. \u00FCber das Kreuzprodukt)'] },
        { title: 'Lagebeziehungen & Schnittwinkel',
          items: ['Untersuchung von Punkt-Gerade, Punkt-Ebene, Gerade-Gerade (Schnitt, parallel, identisch, windschief) und Ebene-Ebene/Gerade-Ebene', 'Berechnung von Schnittwinkeln: Gerade/Gerade und Ebene/Ebene \u00FCber Kosinus, Gerade/Ebene \u00FCber Sinus'] },
        { title: 'LGS-L\u00F6sung (Gau\u00DF-Verfahren) & Sonderf\u00E4lle',
          items: ['L\u00F6sen von Linearen Gleichungssystemen zur Bestimmung von Schnittgebilden', 'Interpretation des Gau\u00DF-Ergebnisses: Eindeutige L\u00F6sung (Schnittpunkt), Widerspruch 0=5 (keine L\u00F6sung), Nullzeile 0=0 (unendlich viele L\u00F6sungen)'] },
        { title: 'Abstandsverfahren, Spiegelung & Schattenwurf',
          items: ['Abst\u00E4nde berechnen: Punkt-Ebene (HNF oder Lotfu\u00DFpunktverfahren), Punkt-Gerade und windschiefe Geraden', 'Spiegelung: Punkte an Ebenen oder Geraden spiegeln', 'Schattenwurf: Modellierung von Lichtstrahlen (Geraden) und deren Durchsto\u00DFpunkte (Ebenen)'] },
        { title: 'Matrizenrechnung (Prozessanalyse)',
          items: ['Rechnen mit Matrizen (Matrix-Vektor- und Matrix-Matrix-Multiplikation)', '\u00DCbergangsmatrizen f\u00FCr zyklische Prozesse, Populationsdynamiken oder Produktionsstufen', 'Stabile Verteilung / Grenzverteilung berechnen (M\u00B7x = x)'] }
      ]
    },
    {
      area: 'stochastik', label: 'Stochastik',
      intro: 'Die Stochastik verkn\u00FCpft die Wahrscheinlichkeitsrechnung (Prognosen bei bekannten Bedingungen) mit der Statistik (R\u00FCckschl\u00FCsse von Daten auf die Realit\u00E4t).',
      methods: [
        { title: 'Kombinatorik & Mehrstufige Zufallsexperimente',
          items: ['Pfadregeln im Baumdiagramm (Pfadmultiplikation und Pfadaddition)', 'Kombinatorik: Abz\u00E4hlen von M\u00F6glichkeiten (Urnenmodell)', 'Der \u201EMindestens-Trick\u201C: P(mindestens ein Treffer) = 1 \u2212 P(kein Treffer)', 'Bedingte Wahrscheinlichkeit \u00FCber Vierfeldertafel oder Bayes-Theorem; Pr\u00FCfung auf stochastische Unabh\u00E4ngigkeit'] },
        { title: 'Diskrete Zufallsgr\u00F6\u00DFen & Binomialverteilung',
          items: ['Wahrscheinlichkeitsverteilung aufstellen, Erwartungswert E(X) und Standardabweichung \u03C3 berechnen', 'Faire Spiele: Erwartungswert des Gewinns minus Einsatz = 0', 'Bernoulli-Kette: zwei Ausg\u00E4nge (Treffer/Niete) mit konstanter Trefferquote p', 'Bernoulli-Formel: P(X=k) = (n \u00FCber k) \u00B7 p\u1D4F \u00B7 (1\u2212p)\u207F\u207B\u1D4F; kumulierte Wahrscheinlichkeiten interpretieren'] },
        { title: 'Das \u201EDreimal-Mindestens-Problem\u201C (n gesucht)',
          items: ['Ansatz \u00FCber das Gegenereignis: 1 \u2212 (1\u2212p)\u207F \u2265 P_Ziel', 'Aufl\u00F6sung nach n durch Logarithmus (ln), Achtung bei der Inversionsregel beim Teilen durch negatives ln!'] },
        { title: 'Sigma-Regeln & Histogramme',
          items: ['Interpretation von Histogrammen (Wie ver\u00E4ndern n und p die Form der Binomialverteilung?)', 'Prognoseintervalle um \u03BC (falls Laplace-Bedingung \u03C3 > 3): 1\u03C3 \u2248 68,3% | 2\u03C3 \u2248 95,4% | 3\u03C3 \u2248 99,7%'] },
        { title: 'Beurteilende Statistik (Hypothesentests)',
          items: ['Aufstellen von Nullhypothese (H0) und Alternativhypothese (H1)', 'Links-/rechts-/beidseitiger Test: Ablehnungsbereich anhand Signifikanzniveau \u03B1 bestimmen', 'Fehler 1. Art (\u03B1-Fehler): H0 wird abgelehnt, obwohl wahr', 'Fehler 2. Art (\u03B2-Fehler): H0 wird beibehalten, obwohl falsch'] }
      ]
    }
  ];

  var TASKS = [
    {"id":"2017-B-ANA-MMS-01","year":"2017","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAnalysisCAS1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2017-B-ANA-MMS-02","year":"2017","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAnalysisCAS2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2017-B-ANA-WTR-01","year":"2017","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAnalysisWTR1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2017-B-ANA-WTR-02","year":"2017","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAnalysisWTR2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2017-B-ANA-WTR-03","year":"2017","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAnalysisWTR3_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2017-A-ANA-AG1-01","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2017-A-ANA-AG1-02","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2017-A-ANA-AG2-01","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAAnalysis2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2017-B-AG-MMS-01","year":"2017","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAGLAA2CAS1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2017-B-AG-MMS-02","year":"2017","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAGLAA2CAS2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2017-B-AG-WTR-01","year":"2017","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAGLAA2WTR1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2017-B-AG-WTR-02","year":"2017","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAGLAA2WTR2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2017-B-AG-WTR-03","year":"2017","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAGLAA2WTR3_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2017-A-AG-AG1-01","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAAGLAA211_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2017-A-AG-AG1-02","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAAGLAA212_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2017-A-AG-AG2-01","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAAGLAA22_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2017-B-LA-WTR-01","year":"2017","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2017-A-LA-AG1-01","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAAGLAA111_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2017-A-LA-AG1-02","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAAGLAA112_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2017-B-STO-MMS-01","year":"2017","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBStochastikCAS1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2017-B-STO-MMS-02","year":"2017","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBStochastikCAS2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2017-B-STO-WTR-01","year":"2017","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtBStochastikWTR_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2017-A-STO-AG1-01","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2017-A-STO-AG1-02","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2017-A-STO-AG2-01","year":"2017","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2017MerhoehtAStochastik2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2018-B-ANA-MMS-01","year":"2018","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAnalysisCAS1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2018-B-ANA-MMS-02","year":"2018","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAnalysisCAS2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2018-B-ANA-MMS-03","year":"2018","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 03","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAnalysisCAS3_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2018-B-ANA-WTR-01","year":"2018","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAnalysisWTR1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2018-B-ANA-WTR-02","year":"2018","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAnalysisWTR2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2018-A-ANA-AG1-01","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2018-A-ANA-AG1-02","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2018-A-ANA-AG2-01","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAAnalysis2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2018-B-AG-MMS-01","year":"2018","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAGLAA2CAS1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2018-B-AG-MMS-02","year":"2018","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAGLAA2CAS2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2018-B-AG-WTR-01","year":"2018","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAGLAA2WTR1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2018-B-AG-WTR-02","year":"2018","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAGLAA2WTR2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2018-B-AG-WTR-03","year":"2018","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAGLAA2WTR3_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2018-A-AG-AG1-01","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAAGLAA211_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2018-A-AG-AG1-02","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAAGLAA212_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2018-A-AG-AG2-01","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAAGLAA22_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2018-B-LA-MMS-01","year":"2018","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAGLAA1CAS1_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2018-B-LA-MMS-02","year":"2018","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAGLAA1CAS2_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2018-B-LA-WTR-01","year":"2018","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2018-A-LA-AG1-01","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAAGLAA111_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2018-A-LA-AG1-02","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAAGLAA112_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2018-A-LA-AG2-01","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAAGLAA12_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2018-B-STO-MMS-01","year":"2018","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBStochastikCAS1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2018-B-STO-MMS-02","year":"2018","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBStochastikCAS2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2018-B-STO-WTR-01","year":"2018","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBStochastikWTR1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2018-B-STO-WTR-02","year":"2018","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtBStochastikWTR2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2018-A-STO-AG1-01","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2018-A-STO-AG1-02","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2018-A-STO-AG2-01","year":"2018","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2018MerhoehtAStochastik2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2019-B-ANA-MMS-01","year":"2019","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAnalysisCAS1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2019-B-ANA-MMS-02","year":"2019","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAnalysisCAS2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2019-B-ANA-WTR-01","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAnalysisWTR1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2019-B-ANA-WTR-02","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAnalysisWTR2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2019-B-ANA-WTR-03","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAnalysisWTR3_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2019-A-ANA-AG1-01","year":"2019","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2019-A-ANA-AG1-02","year":"2019","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2019-A-ANA-AG2-01","year":"2019","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAAnalysis2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2019-B-AG-MMS-01","year":"2019","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAGLAA2CAS1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2019-B-AG-MMS-02","year":"2019","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAGLAA2CAS2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2019-B-AG-WTR-01","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAGLAA2WTR1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2019-B-AG-WTR-02","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAGLAA2WTR2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2019-B-AG-WTR-03","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAGLAA2WTR3_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2019-A-AG-AG1-01","year":"2019","title":"Bearbeitung ohne Hilfsmittel -AG1- 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAAGLAA21_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2019-A-AG-AG2-01","year":"2019","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAAGLAA22_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2019-B-LA-MMS-01","year":"2019","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAGLAA1CAS_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2019-B-LA-WTR-01","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2019-A-LA-AG1-01","year":"2019","title":"Bearbeitung ohne Hilfsmittel -AG1- 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAAGLAA11_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2019-A-LA-AG2-01","year":"2019","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAAGLAA12_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2019-B-STO-MMS-01","year":"2019","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBStochastikCAS1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2019-B-STO-MMS-02","year":"2019","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBStochastikCAS2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2019-B-STO-WTR-01","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBStochastikWTR1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2019-B-STO-WTR-02","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBStochastikWTR2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2019-B-STO-WTR-03","year":"2019","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtBStochastikWTR3_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2019-A-STO-AG1-01","year":"2019","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2019-A-STO-AG1-02","year":"2019","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2019-A-STO-AG2-01","year":"2019","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2019MerhoehtAStochastik2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2020-B-ANA-MMS-01","year":"2020","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAnalysisCAS1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-B-ANA-MMS-02","year":"2020","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAnalysisCAS2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-B-ANA-WTR-01","year":"2020","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAnalysisWTR1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-B-ANA-WTR-02","year":"2020","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAnalysisWTR2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-B-ANA-WTR-03","year":"2020","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAnalysisWTR3_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-A-ANA-AG1-01","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-A-ANA-AG1-02","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-A-ANA-AG1-03","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAnalysis13_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-A-ANA-AG2-01","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAnalysis21_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-A-ANA-AG2-02","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAnalysis22_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2020-B-AG-MMS-01","year":"2020","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAGLAA2CAS1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2020-B-AG-MMS-02","year":"2020","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAGLAA2CAS2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2020-B-AG-WTR-01","year":"2020","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAGLAA2WTR1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2020-B-AG-WTR-02","year":"2020","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAGLAA2WTR2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2020-A-AG-AG1-01","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAGLAA211_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2020-A-AG-AG1-02","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAGLAA212_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2020-A-AG-AG2-01","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAGLAA22_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2020-B-LA-MMS-01","year":"2020","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAGLAA1CAS_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2020-B-LA-WTR-01","year":"2020","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2020-A-LA-AG1-01","year":"2020","title":"Bearbeitung ohne Hilfsmittel -AG1- 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAGLAA11_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2020-A-LA-AG2-01","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAAGLAA12_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2020-B-STO-MMS-01","year":"2020","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBStochastikCAS1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2020-B-STO-MMS-02","year":"2020","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBStochastikCAS2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2020-B-STO-WTR-01","year":"2020","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBStochastikWTR1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2020-B-STO-WTR-02","year":"2020","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtBStochastikWTR2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2020-A-STO-AG1-01","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2020-A-STO-AG1-02","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2020-A-STO-AG1-03","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAStochastik13_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2020-A-STO-AG2-01","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAStochastik21_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2020-A-STO-AG2-02","year":"2020","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2020MerhoehtAStochastik22_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2021-B-ANA-MMS-01","year":"2021","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBAnalysisCAS_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2021-B-ANA-WTR-01","year":"2021","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBAnalysisWTR1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2021-B-ANA-WTR-02","year":"2021","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBAnalysisWTR2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2021-A-ANA-AG1-01","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2021-A-ANA-AG1-02","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2021-A-ANA-AG1-03","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAnalysis13_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2021-A-ANA-AG2-01","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAnalysis21_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2021-A-ANA-AG2-02","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAnalysis22_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2021-B-AG-MMS-01","year":"2021","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBAGLAA2CAS_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2021-B-AG-WTR-01","year":"2021","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBAGLAA2WTR_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2021-A-AG-AG1-01","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAGLAA211_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2021-A-AG-AG1-02","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAGLAA212_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2021-A-AG-AG1-03","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAGLAA213_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2021-A-AG-AG2-01","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAGLAA22_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2021-B-LA-MMS-01","year":"2021","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBAGLAA1CAS_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2021-B-LA-WTR-01","year":"2021","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2021-A-LA-AG1-01","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAGLAA111_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2021-A-LA-AG1-02","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAGLAA112_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2021-A-LA-AG1-03","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAGLAA113_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2021-A-LA-AG2-01","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAGLAA121_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2021-A-LA-AG2-02","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAAGLAA122_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2021-B-STO-MMS-01","year":"2021","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBStochastikCAS1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2021-B-STO-MMS-02","year":"2021","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBStochastikCAS2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2021-B-STO-WTR-01","year":"2021","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtBStochastikWTR_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2021-A-STO-AG1-01","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2021-A-STO-AG1-02","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2021-A-STO-AG1-03","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAStochastik13_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2021-A-STO-AG2-01","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAStochastik21_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2021-A-STO-AG2-02","year":"2021","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2021MerhoehtAStochastik22_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-B-ANA-MMS-01","year":"2022","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAnalysisMMS1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2022-B-ANA-MMS-02","year":"2022","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAnalysisMMS2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2022-B-ANA-WTR-01","year":"2022","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAnalysisWTR1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2022-B-ANA-WTR-02","year":"2022","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAnalysisWTR2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2022-B-ANA-WTR-03","year":"2022","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAnalysisWTR3_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2022-A-ANA-AG1-01","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2022-A-ANA-AG1-02","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2022-A-ANA-AG1-03","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAnalysis13_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2022-A-ANA-AG2-01","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAnalysis2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2022-B-AG-MMS-01","year":"2022","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAGLAA2MMS1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2022-B-AG-MMS-02","year":"2022","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAGLAA2MMS2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2022-B-AG-WTR-01","year":"2022","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAGLAA2WTR1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2022-B-AG-WTR-02","year":"2022","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAGLAA2WTR2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2022-A-AG-AG1-01","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAGLAA211_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2022-A-AG-AG1-02","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAGLAA212_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2022-A-AG-AG1-03","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAGLAA213_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2022-A-AG-AG2-01","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAGLAA221_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2022-A-AG-AG2-02","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAGLAA222_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2022-B-LA-MMS-01","year":"2022","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAGLAA1MMS_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2022-B-LA-WTR-01","year":"2022","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2022-A-LA-AG1-01","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAGLAA111_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2022-A-LA-AG1-02","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAGLAA112_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2022-A-LA-AG2-01","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAAGLAA12_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2022-B-STO-MMS-01","year":"2022","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBStochastikMMS1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-B-STO-MMS-02","year":"2022","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBStochastikMMS2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-B-STO-MMS-03","year":"2022","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 03","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBStochastikMMS3_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-B-STO-WTR-01","year":"2022","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBStochastikWTR1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-B-STO-WTR-02","year":"2022","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtBStochastikWTR2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-A-STO-AG1-01","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-A-STO-AG1-02","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-A-STO-AG1-03","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAStochastik13_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-A-STO-AG2-01","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAStochastik21_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2022-A-STO-AG2-02","year":"2022","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2022MerhoehtAStochastik22_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-B-ANA-MMS-01","year":"2023","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAnalysisMMS1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2023-B-ANA-MMS-02","year":"2023","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAnalysisMMS2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2023-B-ANA-WTR-01","year":"2023","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAnalysisWTR1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2023-B-ANA-WTR-02","year":"2023","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAnalysisWTR2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2023-A-ANA-AG1-01","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2023-A-ANA-AG1-02","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2023-A-ANA-AG1-03","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAnalysis13_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2023-A-ANA-AG2-01","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAnalysis21_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2023-A-ANA-AG2-02","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAnalysis22_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2023-B-AG-MMS-01","year":"2023","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAGLAA2MMS1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2023-B-AG-MMS-02","year":"2023","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAGLAA2MMS2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2023-B-AG-WTR-01","year":"2023","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAGLAA2WTR1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2023-B-AG-WTR-02","year":"2023","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAGLAA2WTR2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2023-A-AG-AG1-01","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAGLAA211_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2023-A-AG-AG1-02","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAGLAA212_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2023-A-AG-AG1-03","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAGLAA213_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2023-A-AG-AG2-01","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAGLAA221_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2023-A-AG-AG2-02","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAGLAA222_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2023-B-LA-MMS-01","year":"2023","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAGLAA1MMS_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2023-B-LA-WTR-01","year":"2023","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2023-A-LA-AG1-01","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAGLAA111_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2023-A-LA-AG1-02","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAGLAA112_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2023-A-LA-AG2-01","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAAGLAA12_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2023-B-STO-MMS-01","year":"2023","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBStochastikMMS1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-B-STO-MMS-02","year":"2023","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBStochastikMMS2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-B-STO-WTR-01","year":"2023","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBStochastikWTR1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-B-STO-WTR-02","year":"2023","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBStochastikWTR2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-B-STO-WTR-03","year":"2023","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtBStochastikWTR3_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-A-STO-AG1-01","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-A-STO-AG1-02","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-A-STO-AG1-03","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAStochastik13_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-A-STO-AG2-01","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAStochastik21_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2023-A-STO-AG2-02","year":"2023","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2023MerhoehtAStochastik22_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2024-B-ANA-MMS-01","year":"2024","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBAnalysisMMS1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-B-ANA-MMS-02","year":"2024","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBAnalysisMMS2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-B-ANA-WTR-01","year":"2024","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBAnalysisWTR1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-B-ANA-WTR-02","year":"2024","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBAnalysisWTR2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-B-ANA-WTR-03","year":"2024","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBAnalysisWTR3_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-A-ANA-AG1-01","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-A-ANA-AG1-02","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-A-ANA-AG1-03","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAnalysis13_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-A-ANA-AG2-01","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAnalysis21_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-A-ANA-AG2-02","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAnalysis22_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-A-ANA-AG2-03","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 03","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAnalysis23_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2024-B-AG-MMS-01","year":"2024","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBAGLAA2MMS1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2024-B-AG-MMS-02","year":"2024","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBAGLAA2MMS2_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2024-B-AG-WTR-01","year":"2024","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBAGLAA2WTR1_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2024-A-AG-AG1-01","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAGLAA211_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2024-A-AG-AG1-02","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAGLAA212_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2024-A-AG-AG2-01","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAGLAA221_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2024-A-AG-AG2-02","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAGLAA222_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2024-A-AG-AG2-03","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 03","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAGLAA223_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2024-B-LA-WTR-01","year":"2024","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2024-A-LA-AG1-01","year":"2024","title":"Bearbeitung ohne Hilfsmittel -AG1- 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAGLAA11_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2024-A-LA-AG2-01","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAGLAA121_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2024-A-LA-AG2-02","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAAGLAA122_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2024-B-STO-MMS-01","year":"2024","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBStochastikMMS1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2024-B-STO-MMS-02","year":"2024","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBStochastikMMS2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2024-B-STO-WTR-01","year":"2024","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBStochastikWTR1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2024-B-STO-WTR-02","year":"2024","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtBStochastikWTR2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2024-A-STO-AG1-01","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2024-A-STO-AG1-02","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2024-A-STO-AG2-01","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAStochastik21_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2024-A-STO-AG2-02","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAStochastik22_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2024-A-STO-AG2-03","year":"2024","title":"Bearbeitung ohne Hilfsmittel - AG2 - 03","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2024MerhoehtAStochastik23_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-B-ANA-MMS-01","year":"2025","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBAnalysisMMS1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-B-ANA-MMS-02","year":"2025","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBAnalysisMMS2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-B-ANA-WTR-01","year":"2025","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBAnalysisWTR1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-B-ANA-WTR-02","year":"2025","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBAnalysisWTR2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-B-ANA-WTR-03","year":"2025","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBAnalysisWTR3_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-A-ANA-AG1-01","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-A-ANA-AG1-02","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-A-ANA-AG1-03","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAnalysis13_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-A-ANA-AG2-01","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAnalysis21_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-A-ANA-AG2-02","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAnalysis22_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-A-ANA-AG2-03","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 03","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAnalysis23_Aufgabe.pdf","topics":["analysis"]},
    {"id":"2025-B-AG-MMS-01","year":"2025","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBAGLAA2MMS_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2025-B-AG-WTR-01","year":"2025","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBAGLAA2WTR_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2025-A-AG-AG1-01","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAGLAA211_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2025-A-AG-AG1-02","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAGLAA212_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2025-A-AG-AG2-01","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAGLAA221_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2025-A-AG-AG2-02","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAGLAA222_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2025-A-AG-AG2-03","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 03","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAGLAA223_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2025-A-AG-AG2-04","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 04","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAGLAA224_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"2025-B-LA-MMS-01","year":"2025","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBAGLAA1MMS_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2025-B-LA-WTR-01","year":"2025","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2025-A-LA-AG1-01","year":"2025","title":"Bearbeitung ohne Hilfsmittel -AG1- 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAGLAA11_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2025-A-LA-AG2-01","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAGLAA121_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2025-A-LA-AG2-02","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAAGLAA122_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"2025-B-STO-MMS-01","year":"2025","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBStochastikMMS1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-B-STO-MMS-02","year":"2025","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBStochastikMMS2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-B-STO-MMS-03","year":"2025","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 03","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBStochastikMMS3_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-B-STO-WTR-01","year":"2025","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBStochastikWTR1_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-B-STO-WTR-02","year":"2025","title":"Bearbeitung mit Hilfsmitteln - WTR - 02","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBStochastikWTR2_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-B-STO-WTR-03","year":"2025","title":"Bearbeitung mit Hilfsmitteln - WTR - 03","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtBStochastikWTR3_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-A-STO-AG1-01","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-A-STO-AG1-02","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-A-STO-AG2-01","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAStochastik21_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-A-STO-AG2-02","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAStochastik22_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"2025-A-STO-AG2-03","year":"2025","title":"Bearbeitung ohne Hilfsmittel - AG2 - 03","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/2025MerhoehtAStochastik23_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"BSP-B-ANA-MMS-01","year":"BSP","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtBAnalysisCAS1_Aufgabe.pdf","topics":["analysis"]},
    {"id":"BSP-B-ANA-MMS-02","year":"BSP","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 02","area":"analysis","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtBAnalysisCAS2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"BSP-B-ANA-WTR-01","year":"BSP","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"analysis","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtBAnalysisWTR_Aufgabe.pdf","topics":["analysis"]},
    {"id":"BSP-A-ANA-AG1-01","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAnalysis11_Aufgabe.pdf","topics":["analysis"]},
    {"id":"BSP-A-ANA-AG1-02","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"analysis","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAnalysis12_Aufgabe.pdf","topics":["analysis"]},
    {"id":"BSP-A-ANA-AG2-01","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"analysis","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAnalysis2_Aufgabe.pdf","topics":["analysis"]},
    {"id":"BSP-B-AG-MMS-01","year":"BSP","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtBAGLAA2CAS_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"BSP-B-AG-WTR-01","year":"BSP","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtBAGLAA2WTR_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"BSP-A-AG-AG1-01","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAGLAA211_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"BSP-A-AG-AG1-02","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAGLAA212_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"BSP-A-AG-AG2-01","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAGLAA22_Aufgabe.pdf","topics":["geometrie"]},
    {"id":"BSP-B-LA-MMS-01","year":"BSP","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"geometrie","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtBAGLAA1CAS_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"BSP-B-LA-WTR-01","year":"BSP","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"geometrie","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtBAGLAA1WTR_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"BSP-A-LA-AG1-01","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAGLAA111_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"BSP-A-LA-AG1-02","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAGLAA112_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"BSP-A-LA-AG1-03","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG1 - 03","area":"geometrie","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAGLAA113_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"BSP-A-LA-AG2-01","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAGLAA121_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"BSP-A-LA-AG2-02","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG2 - 02","area":"geometrie","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAAGLAA122_Aufgabe.pdf","topics":["lineare-algebra"]},
    {"id":"BSP-B-STO-MMS-01","year":"BSP","title":"Bearbeitung mit Hilfsmitteln - MMS(CAS) - 01","area":"stochastik","part":"B","tool":"MMS","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtBStochastikCAS_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"BSP-B-STO-WTR-01","year":"BSP","title":"Bearbeitung mit Hilfsmitteln - WTR - 01","area":"stochastik","part":"B","tool":"WTR","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtBStochastikWTR_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"BSP-A-STO-AG1-01","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG1 - 01","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAStochastik11_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"BSP-A-STO-AG1-02","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG1 - 02","area":"stochastik","part":"A","difficulty":"AG1","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAStochastik12_Aufgabe.pdf","topics":["stochastik"]},
    {"id":"BSP-A-STO-AG2-01","year":"BSP","title":"Bearbeitung ohne Hilfsmittel - AG2 - 01","area":"stochastik","part":"A","difficulty":"AG2","pdfUrl":"https://www.iqb.hu-berlin.de/media/exercise_files/Abituraufgaben_Mathematik/BeispielaufgabenMerhoehtAStochastik2_Aufgabe.pdf","topics":["stochastik"]}
  ];


  var IQB = {
    base: 'https://www.iqb.hu-berlin.de/de/schule/aufgaben/sekii/abiturpruefungsaufgaben-mathematik/',
    level: 2173,
    years: {
      '2017': 2167,
      '2018': 2166,
      '2019': 2165,
      '2020': 2164,
      '2021': 2163,
      '2022': 2162,
      '2023': 2161,
      '2024': 2160,
      '2025': 2159,
      'BSP': 2168
    },
    subjects: {
      analysis: [2169],
      geometrie: [2170, 2171],
      stochastik: [2172]
    },
    parts: {
      A: 2175,
      B: 2176
    },
    tools: {
      WTR: 2179,
      MMS: 2180
    }
  };

  if (window.IQB_TASKS && window.IQB_TASKS.length) {
    TASKS = window.IQB_TASKS;
  }

  var LANG = {
    de: {
      name: 'Deutsch',
      ui: {
        tasks: 'Aufgaben',
        tasks_found: 'Aufgabe{n} gefunden',
        no_tasks: 'Keine Aufgaben gefunden. Filter anpassen.',
        all: 'Alle',
        browse: 'Durchsuchen',
        train: 'Trainer',
        trainer: 'Trainer',
        train_desc: 'Wähle Jahrgänge und starte das Training. Nach jeder Aufgabe bewertest du die Schwierigkeit — schwere Aufgaben werden dir häufiger angezeigt.',
        train_start: 'Training starten',
        years: 'Jahrgänge',
        areas: 'Bereiche',
        sort: 'Sortierung',
        sort_hard: 'Schwere zuerst',
        sort_new: 'Neue zuerst',
        sort_random: 'Zufällig',
        search: 'Suche',
        search_placeholder: 'Aufgabe suchen...',
        done_btn: '\u2713 Aufgabe erledigt',
        stats_btn: 'Statistik',
        next_btn: 'Weiter \u2192',
        trainer_stats: 'Trainer-Statistik',
        copy_data: 'Daten kopieren',
        how_hard: 'Wie schwer war die Aufgabe?',
        note_label: 'Notiz (optional)',
        note_placeholder: 'z.B. Unteraufgabe a) war schwer — welche Methode?',
        click_to_view: 'Klicken zum Ansehen',
        bookmarks: 'Merkliste',
        train_done: 'Training abgeschlossen',
        train_again: 'Nochmal trainieren',
        part_a: 'Teil A',
        part_b: 'Teil B',
        progress: 'Fortschritt',
        progress_title: 'Was du schon kannst',
        effort: 'erledigt',
        view_year: 'Jahrgang',
        view_method: 'Methode',
        view_topic: 'Thema',
        view_area: 'Bereich',
        dark_mode: 'Dark Mode',
        reset_progress: 'Fortschritt zurücksetzen',
        reset_progress_desc: 'Setzt nur die Haken bei den Aufgaben zurück. Sterne, Notizen und Themen-Checkboxen bleiben erhalten.',
        reset_all: 'Alle Daten löschen',
        reset_all_desc: 'Löscht ALLE Daten: Aufgaben-Haken, Bewertungen, Notizen und Themen-Checkboxen. Nicht rückgängig machbar.',
        show_cas: 'MMS/CAS Aufgaben',
        cas_info: 'MMS/CAS wird im Abitur in Baden-Württemberg nicht benötigt.',
        global_stats: 'Statistiken',
        stats: 'Statistiken',
        shortcuts: 'Tastenkürzel',
        shortcut_browse: 'Durchsuchen',
        shortcut_train: 'Trainer',
        shortcut_stats: 'Statistiken',
        shortcut_themen: 'Themenübersicht',
        shortcut_search: 'Suche fokussieren',
        shortcut_esc: 'Modal schließen',
        shortcut_rating: 'Bewertung im Trainer (1-5 Sterne)',
        shortcut_enter: 'Aufgabe erledigt / Weiter',
        difficulty_1: 'Sehr leicht',
        difficulty_2: 'Leicht',
        difficulty_3: 'Mittel',
        difficulty_4: 'Schwer',
        difficulty_5: 'Sehr schwer',
        sample: 'Beispielaufgaben',
        unknown: 'Sonstige',
        avg: 'Durchschnitt',
        rated_pct: 'Bewertet',
        completed: 'Erledigt',
        unrated: 'Unbewertet',
        avg_difficulty: '\u00D8 Schwierigkeit',
        search_placeholder: 'Aufgabe suchen\u2026',
        filter_part: 'Teil A+B',
        filter_part_a: 'Teil A (ohne Hilfsmittel)',
        filter_part_b: 'Teil B (mit Hilfsmitteln)',
        filter_diff_all: 'Alle Niveaus',
        filter_tool_all: 'Alle Hilfsmittel',
        filter_tool_none: 'Keine',
        filter_year_all: 'Alle Jahre',
        attempt: 'durchgeführt',
        times: 'x',
      }
    }
  };

  var currentLang = 'de';

  function t(key) {
    var lang = LANG[currentLang];
    if (!lang) lang = LANG.de;
    var val = lang.ui[key];
    if (val !== undefined) return val;
    val = LANG.de.ui[key];
    return val !== undefined ? val : key;
  }

  function tn(key, n) {
    var s = t(key);
    return s.replace('{n}', n !== 1 ? 'n' : '');
  }

  var areaLabels = { analysis: 'Analysis', geometrie: 'Geometrie', 'lineare-algebra': 'Lineare Algebra', stochastik: 'Stochastik' };

  function getMethodLabel(task) {
    if (task.part === 'A') return t('part_a') + ' \u00B7 ' + task.difficulty;
    return t('part_b') + ' \u00B7 ' + task.tool;
  }

  var areaTasks = { analysis: [], geometrie: [], stochastik: [] };
  TASKS.forEach(function (t) {
    if (areaTasks[t.area]) areaTasks[t.area].push(t);
  });
  var yearOrder = { BSP: 0, '2017': 1, '2018': 2, '2019': 3, '2020': 4, '2021': 5, '2022': 6, '2023': 7, '2024': 8, '2025': 9 };
  Object.keys(areaTasks).forEach(function (area) {
    areaTasks[area].sort(function (a, b) {
      return (yearOrder[a.year] || 0) - (yearOrder[b.year] || 0);
    });
    areaTasks[area].forEach(function (t, i) {
      t.areaNum = i + 1;
    });
  });

  var API_BASE = window.location.origin;

  var state = {
    topics: TOPICS,
    tasks: TASKS,
    filteredTasks: TASKS.slice(),
    selectedArea: 'all',
    selectedTopics: new Set(),
    searchQuery: '',
    bookmarkFilter: false,
    filters: { part: 'all', difficulty: 'all', tool: 'all', year: 'all' },
    progress: {},
    viewMode: 'year',
    collapsedSections: {},
    appMode: 'browse',
    statsArea: 'all',
    themenProgress: {},
    trainer: { started: false, tasks: [], currentIndex: 0, phase: 'config', order: 'hard-first', doneCount: 0 },
    bookmarks: {},
    ratings: {},
    darkMode: false,
    showCAS: true,
    token: null,
    username: '',
    initialized: false,
  };

  function showLogin() {
    $('#login-screen').classList.remove('hidden');
    $('#topbar-username').textContent = '';
  }

  function hideLogin() {
    $('#login-screen').classList.add('hidden');
  }

  function login(username, token) {
    state.token = token;
    state.username = username;
    try { sessionStorage.setItem('abitur-mathe-token', token); } catch (e) {}
    try { sessionStorage.setItem('abitur-mathe-username', username); } catch (e) {}
    $('#topbar-username').textContent = username;
    hideLogin();
    if (!state.initialized) {
      state.initialized = true;
      initApp();
    } else {
      loadProgress();
    }
  }

  function logout() {
    state.token = null;
    state.username = '';
    try { sessionStorage.removeItem('abitur-mathe-token'); } catch (e) {}
    try { sessionStorage.removeItem('abitur-mathe-username'); } catch (e) {}
    state.progress = {};
    state.ratings = {};
    state.themenProgress = {};
    state.bookmarks = {};
    showLogin();
  }

  function apiUrl(path) {
    return API_BASE + '/api' + path;
  }

  function apiHeaders() {
    var h = { 'Content-Type': 'application/json' };
    if (state.token) h['Authorization'] = 'Bearer ' + state.token;
    return h;
  }

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var el = {};

  function init() {
    el.taskList = $('#task-list');
    el.searchInput = $('#search-input');
    el.progressSummary = $('#progress-summary');
    el.overallBar = $('#overall-bar');
    el.overallCount = $('#overall-count');
    el.overallPercent = $('#overall-percent');
    el.areaChart = $('#area-chart');
    el.progressCanvas = $('#progress-canvas');
    el.chartLabel = $('#chart-label');
    el.resultInfo = $('#result-info');
    el.filterPart = $('#filter-part');
    el.filterDifficulty = $('#filter-difficulty');
    el.filterTool = $('#filter-tool');
    el.filterYear = $('#filter-year');

    loadDarkMode();
    loadCASToggle();
    applyLang();

    // Check for existing token
    var savedToken = null;
    var savedUsername = '';
    try { savedToken = sessionStorage.getItem('abitur-mathe-token'); } catch (e) {}
    try { savedUsername = sessionStorage.getItem('abitur-mathe-username'); } catch (e) {}

    if (savedToken && savedUsername) {
      state.token = savedToken;
      state.username = savedUsername;
      state.initialized = true;
      hideLogin();
      initApp();
    } else {
      showLogin();
    }

    // Login form
    $('#login-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var username = $('#login-username').value.trim();
      var password = $('#login-password').value;
      if (!username || !password) return;

      fetch(apiUrl('/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password })
      }).then(function (res) {
        return res.json().then(function (data) { return { status: res.status, data: data }; });
      }).then(function (result) {
        if (result.status !== 200) {
          $('#login-error').textContent = result.data.error || 'Anmeldung fehlgeschlagen';
          $('#login-error').classList.remove('hidden');
          return;
        }
        $('#login-error').classList.add('hidden');
        login(result.data.username, result.data.token);
      }).catch(function () {
        $('#login-error').textContent = 'Verbindung zum Server fehlgeschlagen';
        $('#login-error').classList.remove('hidden');
      });
    });

    // Logout
    $('#logout-btn').addEventListener('click', function () {
      logout();
      $('#menu-dropdown').classList.add('hidden');
    });
  }

  function initApp() {
    loadProgress();

    el.searchInput.addEventListener('input', function () {
      state.searchQuery = this.value;
      applyFilters();
    });

    el.filterPart.addEventListener('change', readFilters);
    el.filterDifficulty.addEventListener('change', readFilters);
    el.filterTool.addEventListener('change', readFilters);
    el.filterYear.addEventListener('change', readFilters);

    $$('#area-pills .area-pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        if (this.dataset.area) selectArea(this.dataset.area);
      });
    });

    // Bookmark filter
    $('#bookmark-filter').addEventListener('click', function () {
      state.bookmarkFilter = !state.bookmarkFilter;
      this.classList.toggle('active');
      // Deactivate area pills when bookmark filter is active
      if (state.bookmarkFilter) {
        $$('#area-pills .area-pill[data-area]').forEach(function (p) { p.classList.remove('active'); });
      }
      applyFilters();
    });



    $$('.view-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setViewMode(this.dataset.view); });
    });

    // Menu
    $('#menu-btn').addEventListener('click', function (e) {
      e.stopPropagation();
      $('#menu-dropdown').classList.toggle('hidden');
    });
    document.addEventListener('click', function () { $('#menu-dropdown').classList.add('hidden'); });

    // Dark mode
    $('#dark-toggle').addEventListener('change', function () { toggleDarkMode(); });
    // CAS toggle
    $('#cas-toggle').addEventListener('change', function () { toggleCAS(); });

    // Stats view
    $('#global-stats-link').addEventListener('click', function (e) {
      e.preventDefault();
      switchAppMode('stats');
    });
    $('#global-stats-btn').addEventListener('click', function () {
      switchAppMode('stats');
      $('#menu-dropdown').classList.add('hidden');
    });
    $$('#stats-area-pills .area-pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        state.statsArea = this.dataset.statsArea;
        $$('#stats-area-pills .area-pill').forEach(function (p) {
          p.classList.toggle('active', p.dataset.statsArea === state.statsArea);
        });
        renderStatsView();
      });
    });
    $('#stats-copy-btn').addEventListener('click', function () {
      var text = buildGlobalStatsText();
      if (text) navigator.clipboard.writeText(text);
    });

    // Reset buttons
    $('#reset-progress-btn').addEventListener('click', function () {
      if (confirm(t('reset_progress') + '?')) {
        state.progress = {};
        saveProgress();
        updateProgress();
        renderTasks();
        $('#menu-dropdown').classList.add('hidden');
      }
    });
    $('#reset-all-btn').addEventListener('click', function () {
      if (confirm(t('reset_all') + '?')) {
        state.progress = {};
        state.ratings = {};
        state.themenProgress = {};
        state.bookmarks = {};
        saveProgress();
        updateProgress();
        renderTasks();
        $('#menu-dropdown').classList.add('hidden');
      }
    });

    // Export / Import
    $('#export-btn').addEventListener('click', exportData);
    $('#import-btn').addEventListener('click', importData);

    // Mode tabs
    $$('.mode-tab').forEach(function (tab) {
      tab.addEventListener('click', function () { switchAppMode(this.dataset.mode); });
    });

    // Trainer
    $('#trainer-start-btn').addEventListener('click', startTrainer);
    $('#trainer-done-btn').addEventListener('click', markTaskDone);
    $('#trainer-next-btn').addEventListener('click', submitFeedback);
    $('#trainer-stop-btn').addEventListener('click', stopTrainer);
    $('#trainer-again-btn').addEventListener('click', function () { stopTrainer(); renderTrainerConfig(); });
    $('#trainer-stats-btn').addEventListener('click', function () {
      var panel = $('#trainer-live-stats');
      panel.classList.toggle('hidden');
      if (!panel.classList.contains('hidden')) renderTrainerLiveStats();
    });
    $('#trainer-copy-stats').addEventListener('click', function () {
      var text = buildTrainerStatsText();
      if (text) navigator.clipboard.writeText(text);
    });
    $('#trainer-live-close').addEventListener('click', function () {
      $('#trainer-live-stats').classList.add('hidden');
    });
    $('#trainer-overview-copy').addEventListener('click', function () {
      var text = buildTrainerStatsText();
      if (text) navigator.clipboard.writeText(text);
    });

    // Star rating
    var starContainer = $('#star-rating');
    if (starContainer) {
      starContainer.addEventListener('click', function (e) {
        var star = e.target.closest('.star');
        if (!star) return;
        var rating = parseInt(star.dataset.rating);
        $$('.star').forEach(function (s) {
          s.classList.toggle('active', parseInt(s.dataset.rating) <= rating);
        });
      });
      starContainer.addEventListener('mouseover', function (e) {
        var star = e.target.closest('.star');
        if (!star) return;
        var rating = parseInt(star.dataset.rating);
        $$('.star').forEach(function (s) {
          s.classList.toggle('hover-active', parseInt(s.dataset.rating) <= rating);
        });
      });
      starContainer.addEventListener('mouseout', function () {
        $$('.star').forEach(function (s) { s.classList.remove('hover-active'); });
      });
    }

    // Trainer bookmark toggle
    var tbmBtn = $('#trainer-bookmark-btn');
    if (tbmBtn) {
      tbmBtn.addEventListener('click', function () {
        var task = state.trainer.tasks[state.trainer.currentIndex];
        if (!task) return;
        if (state.bookmarks[task.id]) {
          delete state.bookmarks[task.id];
        } else {
          state.bookmarks[task.id] = true;
        }
        saveProgress();
        updateTrainerBookmarkBtn();
      });
    }

    // Note modal: click on note preview in task list
    el.taskList.addEventListener('click', function (e) {
      var noteEl = e.target.closest('.task-note-preview');
      if (!noteEl) return;
      var taskId = noteEl.dataset.noteId;
      var noteText = state.ratings[taskId] ? (state.ratings[taskId].notes || '') : '';
      if (!noteText) return;
      $('#note-modal-body').textContent = noteText;
      $('#note-modal').classList.remove('hidden');
    });

    // Bookmark toggle
    el.taskList.addEventListener('click', function (e) {
      var bm = e.target.closest('[data-bookmark]');
      if (!bm) return;
      var id = bm.dataset.bookmark;
      if (state.bookmarks[id]) {
        delete state.bookmarks[id];
      } else {
        state.bookmarks[id] = true;
      }
      saveProgress();
      renderTasks();
    });

    // Note modal: close
    $('#note-modal-close').addEventListener('click', function () {
      $('#note-modal').classList.add('hidden');
    });
    $('#note-modal').addEventListener('click', function (e) {
      if (e.target === this) this.classList.add('hidden');
    });

    // Shortcuts button
    $('#shortcuts-btn').addEventListener('click', function () {
      $('#shortcuts-modal').classList.remove('hidden');
      $('#menu-dropdown').classList.add('hidden');
    });
    // Close via any .modal-close button
    $$('.modal-close').forEach(function (b) {
      b.addEventListener('click', function () {
        this.closest('.modal-overlay').classList.add('hidden');
      });
    });
    $$('.modal-overlay').forEach(function (ov) {
      ov.addEventListener('click', function (e) {
        if (e.target === this) this.classList.add('hidden');
      });
    });

    // Global keyboard shortcuts
    document.addEventListener('keydown', function (e) {
      // Don't fire when typing in inputs/textareas
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        if (e.key === 'Escape') {
          e.target.blur();
        }
        return;
      }
      switch (e.key) {
        case 'b': case 'B': switchAppMode('browse'); break;
        case 't': case 'T': switchAppMode('train'); break;
        case 's': case 'S': switchAppMode('stats'); break;
        case 'm': case 'M': switchAppMode('themen'); break;
        case '/': el.searchInput.focus(); e.preventDefault(); break;
        case 'Escape':
          $$('.modal-overlay').forEach(function (ov) { ov.classList.add('hidden'); });
          break;
        case 'Enter':
          // In trainer: trigger done or next
          if (state.trainer.started) {
            if ($('#trainer-feedback').classList.contains('hidden')) {
              $('#trainer-done-btn').click();
            } else {
              $('#trainer-next-btn').click();
            }
          }
          break;
      }
      // 1-5 for star rating in trainer
      if (e.key >= '1' && e.key <= '5' && state.trainer.started) {
        var r = parseInt(e.key);
        var starBtns = $$('#star-rating .star');
        if (starBtns.length) {
          starBtns.forEach(function (s) {
            s.classList.toggle('active', parseInt(s.dataset.rating) <= r);
          });
        }
      }
    });
  }

  function setViewMode(mode) {
    state.viewMode = mode;
    state.collapsedSections = {};
    $$('.view-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.view === mode);
    });
    renderTasks();
  }

  function selectArea(area) {
    state.selectedArea = area;
    state.selectedTopics = new Set();
    $$('.area-pill').forEach(function (t) {
      t.classList.toggle('active', t.dataset.area === area);
    });
    // Deactivate bookmark filter when any area is selected
    if (state.bookmarkFilter) {
      state.bookmarkFilter = false;
      $('#bookmark-filter').classList.remove('active');
    }
    applyFilters();
  }

  // (topic tree functions removed — sidebar eliminated)

  function readFilters() {
    state.filters.part = el.filterPart.value;
    state.filters.difficulty = el.filterDifficulty.value;
    state.filters.tool = el.filterTool.value;
    state.filters.year = el.filterYear.value;
    applyFilters();
  }

  function applyFilters() {
    var area = state.selectedArea;
    var topics = state.selectedTopics;
    var fp = state.filters.part;
    var fd = state.filters.difficulty;
    var ft = state.filters.tool;
    var fy = state.filters.year;
    var q = state.searchQuery.toLowerCase().trim();
    var bm = state.bookmarkFilter;

    state.filteredTasks = state.tasks.filter(function (task) {
      if (bm && !state.bookmarks[task.id]) return false;
      if (area !== 'all' && task.area !== area) return false;
      if (topics.size > 0 && !task.topics.some(function (t) { return topics.has(t); })) return false;
      if (fp !== 'all' && task.part !== fp) return false;
      if (fd !== 'all' && task.difficulty !== fd) return false;
      var taskTool = task.tool || 'none';
      if (ft !== 'all' && taskTool !== ft) return false;
      if (!state.showCAS && task.tool === 'MMS') return false;
      if (fy !== 'all' && String(task.year) !== fy) return false;
      if (q) {
        var match = task.title.toLowerCase().indexOf(q) !== -1 || task.id.toLowerCase().indexOf(q) !== -1;
        if (!match) {
          match = task.topics.some(function (tid) {
            var t = state.topics.filter(function (x) { return x.id === tid; })[0];
            return t && t.name.toLowerCase().indexOf(q) !== -1;
          });
        }
        if (!match) return false;
      }
      return true;
    });

    renderTasks();
    updateProgress();
  }

  function iqbEnc(str) {
    return encodeURIComponent(str).replace(/%20/g, '+');
  }

  function buildIqbUrl(task) {
    var params = [];
    var subjects = IQB.subjects[task.area] || [];
    subjects.forEach(function (sid) { params.push('Sachgebiet=' + sid); });
    params.push('Anforderungsniveau=' + IQB.level);
    var yearKey = String(task.year);
    if (IQB.years[yearKey]) {
      params.push(iqbEnc('Prüfungsjahr/Beispielaufgaben') + '=' + IQB.years[yearKey]);
    }
    params.push(iqbEnc('Prüfungsteil') + '=' + IQB.parts[task.part]);
    if (task.part === 'B' && task.tool && IQB.tools[task.tool]) {
      params.push(iqbEnc('Digitales Hilfsmittel (nur Prüfungsteil B - Bearbeitung mit Hilfsmitteln)') + '=' + IQB.tools[task.tool]);
    }
    return IQB.base + '?' + params.join('&');
  }

  function buildTaskHtml(task) {
    var taskDone = state.progress[task.id] === true;
    var officialHref = buildIqbUrl(task);
    var pdfHref = task.pdfUrl || '';
    var areaLabel = areaLabels[task.area] || task.area;
    var attemptCount = state.ratings[task.id] ? (state.ratings[task.id].count || 0) : 0;
    var attemptBadge = attemptCount > 0 ? ' <span class="task-attempt-badge" title="' + attemptCount + 'x ' + t('attempt') + '">' + attemptCount + t('times') + '</span>' : '';
    var noteText = state.ratings[task.id] ? (state.ratings[task.id].notes || '') : '';
    var notesHtml = '';
    if (noteText) {
      var notePreview = '<span class="task-note-preview" data-note-id="' + task.id + '" title="' + t('click_to_view') + '">' + esc(noteText.substring(0, 50)) + (noteText.length > 50 ? '...' : '') + '</span>';
      notesHtml = '<span class="task-compact-notes">' + notePreview + '</span>';
    }
    var isBookmarked = state.bookmarks[task.id];
    var bookmarkStar = '<span class="task-bookmark' + (isBookmarked ? ' active' : '') + '" data-bookmark="' + task.id + '">' + (isBookmarked ? '\u2605' : '\u2606') + '</span>';

    return '<label class="task-compact' + (taskDone ? ' task-compact-done' : '') + '">' +
      '<input type="checkbox" class="task-compact-checkbox" data-id="' + task.id + '"' + (taskDone ? ' checked' : '') + '>' +
      '<span class="task-compact-title">' + areaLabel + ' #' + task.areaNum + ' \u00B7 ' + getMethodLabel(task) + attemptBadge + '</span>' +
      bookmarkStar +
      notesHtml +
      '<span class="task-compact-year">' + task.year + '</span>' +
      '<span class="task-compact-links">' +
      '<a href="' + officialHref + '" target="_blank" rel="noopener" class="task-compact-link" title="IQB-Filter \u00F6ffnen">\u2197</a>' +
      (pdfHref ? '<a href="' + pdfHref + '" target="_blank" rel="noopener" class="task-compact-link" title="PDF \u00F6ffnen">PDF</a>' : '') +
      '</span></label>';
  }

  function renderGroup(g, depth) {
    var key = g.key;
    var done = g.tasks.filter(function (t) { return state.progress[t.id] === true; }).length;
    var total = g.tasks.length;
    var pct = total ? Math.round((done / total) * 100) : 0;
    var collapsed = state.collapsedSections[key] ? '' : ' collapsed';
    var isNested = depth > 0;

    var html = '<div class="task-section' + collapsed + (isNested ? ' task-section-nested' : '') + '" data-section="' + esc(key) + '"' + (depth === 0 ? ' data-area="' + esc(key) + '"' : '') + '>';
    html += '<div class="task-section-header" data-section-toggle="' + esc(key) + '">';
    html += '<span class="arrow">\u25BC</span>';
    html += '<span class="task-section-title">' + esc(g.label) + '</span>';
    html += '<span class="task-section-meta">' + done + '/' + total + '</span>';
    html += '<div class="task-section-bar"><div class="task-section-bar-fill" style="width:' + pct + '%"></div></div>';
    html += '</div>';
    html += '<div class="task-section-body">';

    // Show sub-topic list if available (only at depth 0)
    if (depth === 0 && g.subTopics && g.subTopics.length) {
      var topicCollapsed = !state.collapsedSections[key + '-topics'] ? ' collapsed' : '';
      html += '<div class="subtopic-section' + topicCollapsed + '" data-section="' + esc(key) + '-topics">';
      html += '<div class="subtopic-header" data-section-toggle="' + esc(key) + '-topics">';
      html += '<span class="arrow">\u25BC</span>';
      html += '<span class="subtopic-title">Themenübersicht</span>';
      html += '</div>';
      html += '<div class="subtopic-body">';
      html += '<ul class="topic-list">';
      g.subTopics.forEach(function (st) {
        html += '<li class="topic-list-item">' + esc(st.name) + '</li>';
      });
      html += '</ul>';
      html += '</div></div>';
    }

    // Render sub-groups or tasks
    if (g.subGroups) {
      g.subGroups.forEach(function (sg) { html += renderGroup(sg, depth + 1); });
    } else {
      g.tasks.forEach(function (task) { html += buildTaskHtml(task); });
    }

    html += '</div></div>';
    return html;
  }

  function renderTasks() {
    var len = state.filteredTasks.length;
    el.resultInfo.textContent = len + ' ' + tn('tasks_found', len);

    if (len === 0) {
      el.taskList.innerHTML = '<div class="empty-state">' + t('no_tasks') + '</div>';
      return;
    }

    var groups = getGroups(state.viewMode);
    var html = '';
    groups.forEach(function (g) {
      html += renderGroup(g, 0);
    });
    el.taskList.innerHTML = html;

    $$('.task-compact-checkbox').forEach(function (cb) {
      cb.addEventListener('change', onTaskToggle);
    });
    $$('[data-section-toggle]').forEach(function (h) {
      h.addEventListener('click', onSectionToggle);
    });

    updateProgress();
  }

  function getGroups(mode) {
    if (mode === 'area') return getAreaGroups();
    if (mode === 'method') return getMethodGroups();
    if (mode === 'topic') return getTopicGroups();
    return getYearGroups();
  }

  function getAreaGroups() {
    var areaOrder = ['analysis', 'geometrie', 'stochastik'];
    var result = [];

    areaOrder.forEach(function (area) {
      var tasks = state.filteredTasks.filter(function (t) {
        if (area === 'geometrie') return t.area === 'geometrie';
        return t.area === area;
      });
      if (!tasks.length) return;

      tasks.sort(function (a, b) { return a.areaNum - b.areaNum; });

      var subGroups = [];
      if (area === 'geometrie') {
        var ag = tasks.filter(function (t) { return t.topics.indexOf('geometrie') !== -1; });
        var la = tasks.filter(function (t) { return t.topics.indexOf('lineare-algebra') !== -1; });
        if (ag.length) {
          ag.sort(function (a, b) { return a.areaNum - b.areaNum; });
          var agSub = state.topics.filter(function (t) { return t.parent === 'geometrie'; });
          subGroups.push({ key: 'geometrie-ag', label: areaLabels.geometrie, tasks: ag, subTopics: agSub });
        }
        if (la.length) {
          la.sort(function (a, b) { return a.areaNum - b.areaNum; });
          var laSub = state.topics.filter(function (t) { return t.parent === 'lineare-algebra'; });
          subGroups.push({ key: 'geometrie-la', label: areaLabels['lineare-algebra'], tasks: la, subTopics: laSub });
        }
      }

      var areaTopics = state.topics.filter(function (t) {
        if (area === 'geometrie') return t.parent === 'geometrie' || t.id === 'lineare-algebra';
        return t.parent === area;
      });

      result.push({
        key: area,
        label: areaLabels[area] || area,
        tasks: tasks,
        subTopics: areaTopics,
        subGroups: subGroups.length ? subGroups : null
      });
    });

    return result;
  }

  function getYearGroups() {
    var groups = {};
    state.filteredTasks.forEach(function (t) {
      if (!groups[t.year]) groups[t.year] = [];
      groups[t.year].push(t);
    });
    var order = ['BSP', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
    var result = [];
    order.forEach(function (y) {
      if (groups[y]) result.push({ key: y, label: y === 'BSP' ? t('sample') : y, tasks: groups[y] });
    });
    return result;
  }

  function getMethodGroups() {
    var groups = {
      'A-AG1': { label: t('part_a') + ' \u00B7 AG1', tasks: [] },
      'A-AG2': { label: t('part_a') + ' \u00B7 AG2', tasks: [] },
      'B-WTR': { label: t('part_b') + ' \u00B7 WTR', tasks: [] },
    };
    if (state.showCAS) {
      groups['B-MMS'] = { label: t('part_b') + ' \u00B7 MMS/CAS', tasks: [] };
    }
    state.filteredTasks.forEach(function (t) {
      var key = t.part === 'A' ? 'A-' + t.difficulty : 'B-' + t.tool;
      if (groups[key]) groups[key].tasks.push(t);
    });
    var result = [];
    var order = ['A-AG1', 'A-AG2', 'B-WTR'];
    if (state.showCAS) order.push('B-MMS');
    order.forEach(function (key) {
      if (groups[key] && groups[key].tasks.length) result.push(groups[key]);
    });
    result.forEach(function (g) { g.key = g.label; });
    return result;
  }

  function getTopicGroups() {
    var groups = {};
    state.filteredTasks.forEach(function (t) {
      var tid = t.topics && t.topics[0] ? t.topics[0] : 'unknown';
      if (!groups[tid]) groups[tid] = { label: tid, tasks: [] };
      groups[tid].tasks.push(t);
    });
    Object.keys(groups).forEach(function (key) {
      groups[key].tasks.sort(function (a, b) { return a.areaNum - b.areaNum; });
    });
    var result = [];
    state.topics.forEach(function (topic) {
      if (groups[topic.id]) result.push({ key: topic.id, label: topic.name, tasks: groups[topic.id].tasks });
    });
    if (groups['unknown']) result.push({ key: 'unknown', label: t('unknown'), tasks: groups['unknown'].tasks });
    return result;
  }

  function onSectionToggle(e) {
    var key = e.currentTarget.dataset.sectionToggle;
    if (state.collapsedSections[key]) {
      delete state.collapsedSections[key];
    } else {
      state.collapsedSections[key] = true;
    }
    var section = e.currentTarget.closest('.task-section, .subtopic-section, .th-area, .th-subsection');
    if (section) section.classList.toggle('collapsed');
  }

  function onTaskToggle(e) {
    var id = e.target.dataset.id;
    state.progress[id] = e.target.checked;
    saveProgress();
    updateProgress();
    var card = e.target.closest('.task-card');
    if (card) card.classList.toggle('done', e.target.checked);
    var compact = e.target.closest('.task-compact');
    if (compact) compact.classList.toggle('task-compact-done', e.target.checked);
  }

  function updateProgress() {
    var visibleTasks = state.showCAS ? state.tasks : state.tasks.filter(function (t) { return t.tool !== 'MMS'; });
    var total = visibleTasks.length;
    var done = 0;
    var areaTotals = { analysis: 0, geometrie: 0, stochastik: 0 };
    var areaDone = { analysis: 0, geometrie: 0, stochastik: 0 };

    visibleTasks.forEach(function (task) {
      if (areaTotals.hasOwnProperty(task.area)) {
        areaTotals[task.area] += 1;
        if (state.progress[task.id] === true) {
          areaDone[task.area] += 1;
        }
      }
      if (state.progress[task.id] === true) done++;
    });

    var percent = total ? Math.round((done / total) * 100) : 0;

    el.progressSummary.textContent = done + '/' + total + ' ' + t('tasks');
    if (el.overallBar) el.overallBar.style.width = percent + '%';
    if (el.overallCount) el.overallCount.textContent = done + ' ' + t('effort');
    if (el.overallPercent) el.overallPercent.textContent = percent + '%';

    if (el.areaChart) {
      el.areaChart.innerHTML = [
        ['analysis', 'Analysis'],
        ['geometrie', 'Geometrie'],
        ['stochastik', 'Stochastik']
      ].map(function (row) {
        var key = row[0];
        var label = row[1];
        var areaTotal = areaTotals[key];
        var areaPercent = areaTotal ? Math.round((areaDone[key] / areaTotal) * 100) : 0;
        return '<div class="area-row">' +
          '<div class="area-row-head"><span>' + label + '</span><span>' + areaDone[key] + '/' + areaTotal + '</span></div>' +
          '<div class="area-row-track"><div class="area-row-fill ' + key + '" style="width:' + areaPercent + '%"></div></div>' +
        '</div>';
      }).join('');
    }

    drawDonutChart(done, areaDone, total);
  }

  function drawDonutChart(done, areaDone, total) {
    var canvas = el.progressCanvas;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var cx = canvas.width / 2;
    var cy = canvas.height / 2;
    var outerR = 72;
    var innerR = 46;
    if (total === 0) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }

    var areas = [
      { key: 'analysis', label: 'Analysis', color: '#3b82f6' },
      { key: 'geometrie', label: 'Geometrie', color: '#22c55e' },
      { key: 'stochastik', label: 'Stochastik', color: '#f59e0b' }
    ];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var completedTotal = 0;
    areas.forEach(function (a) { completedTotal += areaDone[a.key] || 0; });
    var remaining = total - completedTotal;

    var startAngle = -Math.PI / 2;
    var slices = [];

    areas.forEach(function (a) {
      var count = areaDone[a.key] || 0;
      if (count > 0) {
        var angle = (count / total) * 2 * Math.PI;
        slices.push({ angle: angle, color: a.color });
      }
    });
    if (remaining > 0) {
      slices.push({ angle: (remaining / total) * 2 * Math.PI, color: '#e2e8f0' });
    }

    slices.forEach(function (s) {
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, startAngle, startAngle + s.angle);
      ctx.arc(cx, cy, innerR, startAngle + s.angle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = s.color;
      ctx.fill();
      startAngle += s.angle;
    });

    var pct = total ? Math.round((completedTotal / total) * 100) : 0;
    if (el.chartLabel) el.chartLabel.textContent = pct + '%';
  }

  function saveProgress() {
    if (!state.token) return;
    try {
      var saveData = {
        progress: state.progress,
        ratings: state.ratings,
        themenProgress: state.themenProgress,
        bookmarks: state.bookmarks,
      };
      fetch(apiUrl('/user/progress'), {
        method: 'PUT',
        headers: apiHeaders(),
        body: JSON.stringify({ data: JSON.stringify(saveData) })
      }).catch(function () {});
    } catch (e) {}
  }

  function loadProgress() {
    if (!state.token) return;
    fetch(apiUrl('/user/progress'), {
      method: 'GET',
      headers: apiHeaders()
    }).then(function (res) {
      if (!res.ok) throw new Error('Fehler beim Laden');
      return res.json();
    }).then(function (data) {
      var saved = data.data || null;
      if (saved) {
        try {
          var parsed = JSON.parse(saved);
          state.progress = parsed.progress || {};
          state.ratings = parsed.ratings || {};
          state.themenProgress = parsed.themenProgress || {};
          state.bookmarks = parsed.bookmarks || {};
        } catch (e) {
          state.progress = {};
          state.ratings = {};
          state.themenProgress = {};
          state.bookmarks = {};
        }
      } else {
        state.progress = {};
        state.ratings = {};
        state.themenProgress = {};
        state.bookmarks = {};
      }
      applyFilters();
      updateProgress();
      if (state.appMode === 'themen') renderThemenView();
      if (state.appMode === 'stats') renderStatsView();
    }).catch(function () {
      // Offline fallback
    });
  }

  // ========== DARK MODE ==========
  function loadDarkMode() {
    try { state.darkMode = localStorage.getItem('abitur-mathe-dark') === 'true'; } catch (e) {}
    applyDarkMode();
  }
  function applyDarkMode() {
    document.documentElement.classList.toggle('dark', state.darkMode);
    var toggle = $('#dark-toggle');
    if (toggle) toggle.checked = state.darkMode;
  }
  function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    applyDarkMode();
    try { localStorage.setItem('abitur-mathe-dark', String(state.darkMode)); } catch (e) {}
  }

  // ========== CAS TOGGLE ==========
  function loadCASToggle() {
    try { state.showCAS = localStorage.getItem('abitur-mathe-show-cas') !== 'false'; } catch (e) {}
    applyCASToggle();
  }
  function applyCASToggle() {
    var toggle = $('#cas-toggle');
    if (toggle) toggle.checked = state.showCAS;
    updateToolFilterOptions();
    if (!state.showCAS) {
      if (state.filters.tool === 'MMS') {
        state.filters.tool = 'all';
        if (el.filterTool) el.filterTool.value = 'all';
      }
      if ($('#trainer-filter-tool') && $('#trainer-filter-tool').value === 'MMS') {
        $('#trainer-filter-tool').value = 'all';
      }
    }
  }
  function toggleCAS() {
    state.showCAS = !state.showCAS;
    applyCASToggle();
    try { localStorage.setItem('abitur-mathe-show-cas', String(state.showCAS)); } catch (e) {}
    applyFilters();
  }
  function updateToolFilterOptions() {
    var mmsOpt = $('#filter-tool option[value="MMS"]');
    if (mmsOpt) mmsOpt.style.display = state.showCAS ? '' : 'none';
    var trainerMmsOpt = $('#trainer-filter-tool option[value="MMS"]');
    if (trainerMmsOpt) trainerMmsOpt.style.display = state.showCAS ? '' : 'none';
  }

  // ========== EXPORT / IMPORT ==========
  function exportData() {
    try {
      var data = {
        version: 1,
        exportedAt: new Date().toISOString(),
        progress: state.progress,
        ratings: state.ratings,
        themenProgress: state.themenProgress,
        bookmarks: state.bookmarks,
        darkMode: state.darkMode,
        showCAS: state.showCAS
      };
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'mathe-helfer-backup.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      $('#menu-dropdown').classList.add('hidden');
    } catch (e) {
      alert('Export fehlgeschlagen: ' + e.message);
    }
  }

  function importData() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.addEventListener('change', function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        try {
          var data = JSON.parse(ev.target.result);
          if (!data || typeof data !== 'object') throw new Error('Ungültiges Format');
          if (data.progress) state.progress = data.progress;
          if (data.ratings) state.ratings = data.ratings;
          if (data.themenProgress) state.themenProgress = data.themenProgress;
          if (data.bookmarks) state.bookmarks = data.bookmarks;
          localStorage.setItem('abitur-mathe-dark', String(Boolean(data.darkMode)));
          localStorage.setItem('abitur-mathe-show-cas', String(Boolean(data.showCAS)));
          saveProgress();
          $('#menu-dropdown').classList.add('hidden');
          location.reload();
        } catch (err) {
          alert('Import fehlgeschlagen: ' + err.message);
        }
      };
      reader.readAsText(file);
    });
    input.click();
  }

  // ========== LANGUAGE ==========
  function applyLang() {
    currentLang = 'de';
    document.documentElement.setAttribute('lang', 'de');
    $$('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      el.textContent = t(key);
    });
    $$('[data-i18n-title]').forEach(function (el) {
      var key = el.dataset.i18nTitle;
      el.title = t(key);
    });
    $$('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.dataset.i18nPlaceholder;
      el.placeholder = t(key);
    });
    $$('select option[data-i18n]').forEach(function (opt) {
      var key = opt.dataset.i18n;
      opt.textContent = t(key);
    });
  }

  // ========== APP MODE ==========
  function switchAppMode(mode) {
    state.appMode = mode;
    $$('.mode-tab').forEach(function (t) { t.classList.toggle('active', t.dataset.mode === mode); });
    var bv = $('#browse-view');
    var tv = $('#trainer-view');
    var sv = $('#stats-view');
    var thv = $('#themen-view');
    if (bv) bv.classList.toggle('hidden', mode !== 'browse');
    if (tv) tv.classList.toggle('hidden', mode !== 'train');
    if (sv) sv.classList.toggle('hidden', mode !== 'stats');
    if (thv) thv.classList.toggle('hidden', mode !== 'themen');
    if (mode === 'train') renderTrainerConfig();
    if (mode === 'browse') { renderTasks(); updateProgress(); }
    if (mode === 'stats') renderStatsView();
    if (mode === 'themen') renderThemenView();
  }

  // ========== TRAINER ==========
  function renderTrainerConfig() {
    $('#trainer-config').classList.remove('hidden');
    $('#trainer-study').classList.add('hidden');
    $('#trainer-overview').classList.add('hidden');
    state.trainer.started = false;

    $('#trainer-heading').textContent = t('trainer');
    $('#trainer-desc').textContent = t('train_desc');
    $('#trainer-config-years-label').textContent = t('years');
    $('#trainer-config-areas-label').textContent = t('areas');
    $('#trainer-config-sort-label').textContent = t('sort');
    $('#trainer-start-btn').textContent = t('train_start');

    var yg = $('#trainer-years');
    if (yg && !yg.children.length) {
      yg.innerHTML = ['BSP', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'].map(function (y) {
        var label = y === 'BSP' ? t('sample') : y;
        return '<label class="trainer-check"><input type="checkbox" value="' + y + '" checked> ' + label + '</label>';
      }).join('');
    }
  }

  function startTrainer() {
    var years = [];
    $$('#trainer-years input:checked').forEach(function (cb) { years.push(cb.value); });
    var areas = [];
    $$('#trainer-areas input:checked').forEach(function (cb) { areas.push(cb.value); });
    var order = $('#trainer-order').value;
    var tPart = $('#trainer-filter-part').value;
    var tDiff = $('#trainer-filter-difficulty').value;
    var tTool = $('#trainer-filter-tool').value;

    if (!years.length || !areas.length) return;

    var pool = state.tasks.filter(function (t) {
      if (areas.indexOf(t.area) === -1) return false;
      if (years.indexOf(String(t.year)) === -1) return false;
      if (tPart !== 'all' && t.part !== tPart) return false;
      if (tDiff !== 'all' && t.difficulty !== tDiff) return false;
      if (!state.showCAS && t.tool === 'MMS') return false;
      var taskTool = t.tool || 'none';
      if (tTool !== 'all' && taskTool !== tTool) return false;
      return true;
    });

    pool.sort(function (a, b) {
      var ra = state.ratings[a.id] ? state.ratings[a.id].difficulty || 0 : 0;
      var rb = state.ratings[b.id] ? state.ratings[b.id].difficulty || 0 : 0;
      if (order === 'random') return Math.random() - 0.5;
      if (order === 'new-first') {
        if (ra === 0 && rb !== 0) return -1;
        if (ra !== 0 && rb === 0) return 1;
        return rb - ra;
      }
      if (ra === 0 && rb !== 0) return -1;
      if (ra !== 0 && rb === 0) return 1;
      return rb - ra;
    });

    state.trainer.tasks = pool;
    state.trainer.currentIndex = 0;
    state.trainer.started = true;
    state.trainer.order = order;
    state.trainer.doneCount = 0;

    $('#trainer-config').classList.add('hidden');
    $('#trainer-study').classList.remove('hidden');
    $('#trainer-overview').classList.add('hidden');
    renderTrainerStudy();
  }

  function renderTrainerStudy() {
    var tasks = state.trainer.tasks;
    var idx = state.trainer.currentIndex;

    if (idx >= tasks.length) {
      renderTrainerOverview();
      return;
    }

    var task = tasks[idx];
    var total = tasks.length;

    $('#trainer-progress-text').textContent = (idx + 1) + '/' + total;
    $('#trainer-progress-fill').style.width = ((idx + 1) / total * 100) + '%';

    var areaLabel = areaLabels[task.area] || task.area;
    var attemptCount = state.ratings[task.id] ? (state.ratings[task.id].count || 0) : 0;
    var attemptStr = attemptCount > 0 ? ' (' + attemptCount + t('times') + ')' : '';
    $('#trainer-task-title').textContent = areaLabel + ' #' + task.areaNum + attemptStr;
    $('#trainer-task-year').textContent = task.year;
    $('#trainer-task-method').textContent = getMethodLabel(task);
    $('#trainer-iqb-link').href = buildIqbUrl(task);
    $('#trainer-pdf-link').href = task.pdfUrl || '#';

    var prevNote = state.ratings[task.id] ? (state.ratings[task.id].notes || '') : '';
    var noteDisplay = $('#trainer-note-display');
    if (prevNote) {
      noteDisplay.textContent = '\uD83D\uDCDD ' + prevNote;
      noteDisplay.classList.remove('hidden');
    } else {
      noteDisplay.classList.add('hidden');
    }

    $('#trainer-actions').classList.remove('hidden');
    $('#trainer-feedback').classList.add('hidden');

    // Reset bookmark button for the next card
    updateTrainerBookmarkBtn();
  }

  function updateTrainerBookmarkBtn() {
    var task = state.trainer.tasks[state.trainer.currentIndex];
    if (!task) return;
    var btn = $('#trainer-bookmark-btn');
    if (!btn) return;
    if (state.bookmarks[task.id]) {
      btn.textContent = '\u2605';
      btn.classList.add('active');
    } else {
      btn.textContent = '\u2606';
      btn.classList.remove('active');
    }
  }

  function markTaskDone() {
    if (!state.trainer.started) return;
    state.trainer.doneCount = (state.trainer.doneCount || 0) + 1;
    saveProgress();
    $('#trainer-actions').classList.add('hidden');
    $('#trainer-feedback').classList.remove('hidden');

    updateTrainerBookmarkBtn();

    $$('.star').forEach(function (s) { s.classList.remove('active', 'hover-active'); });
    $('#trainer-note').value = '';

    var task = state.trainer.tasks[state.trainer.currentIndex];
    var prev = state.ratings[task.id];
    if (prev && prev.difficulty) {
      $$('.star').forEach(function (s) {
        if (parseInt(s.dataset.rating) <= prev.difficulty) s.classList.add('active');
      });
      $('#trainer-note').value = prev.notes || '';
    }

    var fb = $('#trainer-feedback');
    fb.style.animation = 'none';
    fb.offsetHeight;
    fb.style.animation = '';
  }

  function submitFeedback() {
    var task = state.trainer.tasks[state.trainer.currentIndex];
    var rating = 0;
    $$('.star.active').forEach(function (s) {
      var r = parseInt(s.dataset.rating);
      if (r > rating) rating = r;
    });
    if (rating === 0) return;

    var prev = state.ratings[task.id] || {};
    state.ratings[task.id] = {
      difficulty: rating,
      notes: $('#trainer-note').value.trim(),
      count: (prev.count || 0) + 1
    };
    state.progress[task.id] = true;
    saveProgress();
    updateProgress();

    state.trainer.currentIndex++;
    renderTrainerStudy();
  }

  function renderTrainerOverview() {
    $('#trainer-study').classList.add('hidden');
    $('#trainer-overview').classList.remove('hidden');
    state.trainer.started = false;
    $('#trainer-overview-heading').textContent = t('train_done');

    var total = state.trainer.tasks.length;
    var rated = 0;
    var sum = 0;
    var dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    state.trainer.tasks.forEach(function (t) {
      var r = state.ratings[t.id];
      if (r && r.difficulty) {
        rated++;
        sum += r.difficulty;
        if (dist.hasOwnProperty(r.difficulty)) dist[r.difficulty]++;
      }
    });
    var avg = rated ? (sum / rated).toFixed(1) : '-';

    $('#trainer-overview-stats').innerHTML =
      '<div class="trainer-stat-card"><div class="trainer-stat-value">' + total + '</div><div class="trainer-stat-label">' + t('tasks') + '</div></div>' +
      '<div class="trainer-stat-card"><div class="trainer-stat-value">' + avg + '</div><div class="trainer-stat-label">' + t('avg') + '</div></div>' +
      '<div class="trainer-stat-card"><div class="trainer-stat-value">' + Math.round(rated / total * 100) + '%</div><div class="trainer-stat-label">' + t('rated_pct') + '</div></div>';

    $('#difficulty-chart').innerHTML = buildDifficultyChartHtml(dist);
  }

  function stopTrainer() {
    state.trainer.started = false;
    state.trainer.tasks = [];
    state.trainer.currentIndex = 0;
    saveProgress();
    renderTrainerConfig();
  }

  function filterTasksByStatsArea(area) {
    var base = state.showCAS ? state.tasks : state.tasks.filter(function (t) { return t.tool !== 'MMS'; });
    if (area === 'all') return base;
    if (area === 'lineare-algebra') return base.filter(function (t) { return t.topics.indexOf('lineare-algebra') !== -1; });
    return base.filter(function (t) { return t.area === area; });
  }

  function renderStatsView() {
    if (!state.statsArea) state.statsArea = 'all';
    var areaFilter = state.statsArea;
    var filtered = filterTasksByStatsArea(areaFilter);

    var total = filtered.length;
    var done = 0;
    var rated = 0;
    var sum = 0;
    var dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    var totalAttempts = 0;
    filtered.forEach(function (t) {
      if (state.progress[t.id]) done++;
      var r = state.ratings[t.id];
      if (r) {
        if (r.difficulty && dist.hasOwnProperty(r.difficulty)) {
          rated++;
          sum += r.difficulty;
          dist[r.difficulty]++;
        }
        if (r.count) totalAttempts += r.count;
      }
    });
    var avg = rated ? (sum / rated).toFixed(1) : '-';
    var pct = total ? Math.round(done / total * 100) : 0;

    var areaLabel = areaFilter === 'all' ? t('all') : (areaLabels[areaFilter] || 'Lineare Algebra');

    $('#stats-overview-stats').innerHTML =
      '<div class="trainer-stat-card"><div class="trainer-stat-value">' + done + '/' + total + '</div><div class="trainer-stat-label">' + t('progress') + '</div></div>' +
      '<div class="trainer-stat-card"><div class="trainer-stat-value">' + pct + '%</div><div class="trainer-stat-label">' + t('effort') + '</div></div>' +
      '<div class="trainer-stat-card"><div class="trainer-stat-value">' + totalAttempts + '</div><div class="trainer-stat-label">' + t('attempt') + '</div></div>' +
      '<div class="trainer-stat-card"><div class="trainer-stat-value">' + avg + '</div><div class="trainer-stat-label">' + t('avg') + '</div></div>' +
      '<div class="trainer-stat-card"><div class="trainer-stat-value">' + rated + '/' + total + '</div><div class="trainer-stat-label">' + t('rated_pct') + '</div></div>';

    $('#stats-difficulty-chart').innerHTML = buildDifficultyChartHtml(dist);
  }

  function buildGlobalStatsText() {
    var areaFilter = state.statsArea || 'all';
    var filtered = filterTasksByStatsArea(areaFilter);
    var lines = [t('global_stats') + ' (' + new Date().toLocaleDateString() + ')', ''];
    var done = 0;
    for (var k in state.progress) { if (state.progress[k]) done++; }
    lines.push(t('progress') + ': ' + done + '/' + filtered.length);
    var totalAttempts = 0;
    for (var id in state.ratings) {
      var r = state.ratings[id];
      if (r.count) totalAttempts += r.count;
    }
    lines.push(t('attempt') + ': ' + totalAttempts);
    lines.push('');
    lines.push('Aufgabe | ' + t('progress') + ' | Schwierigkeit | ' + t('attempt') + ' | Notizen');
    filtered.forEach(function (t) {
      var r = state.ratings[t.id];
      var stars = '', count = '0', notes = '', taskDone = '-';
      if (r) {
        if (r.difficulty) { for (var i = 0; i < r.difficulty; i++) stars += '\u2605'; }
        count = String(r.count || 0);
        notes = r.notes || '';
      }
      if (state.progress[t.id]) taskDone = 'X';
      lines.push(t.id + ' | ' + taskDone + ' | ' + (stars || '-') + ' | ' + count + ' | ' + notes);
    });
    return lines.join('\n');
  }

  function buildDifficultyChartHtml(dist) {
    var labels = { 1: t('difficulty_1'), 2: t('difficulty_2'), 3: t('difficulty_3'), 4: t('difficulty_4'), 5: t('difficulty_5') };
    var max = Math.max(1, dist[1], dist[2], dist[3], dist[4], dist[5]);
    var html = '';
    for (var i = 1; i <= 5; i++) {
      var pct = Math.round(dist[i] / max * 100);
      html += '<div class="difficulty-row">' +
        '<span class="difficulty-label">' + labels[i] + '</span>' +
        '<div class="difficulty-track"><div class="difficulty-fill level-' + i + '" style="width:' + pct + '%"></div></div>' +
        '<span class="difficulty-count">' + dist[i] + '</span></div>';
    }
    return html;
  }

  function renderTrainerLiveStats() {
    var tasks = state.trainer.tasks || [];
    var completed = 0;
    var sum = 0;
    var rated = 0;
    var dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    tasks.forEach(function (t) {
      if (state.progress[t.id]) completed++;
      var r = state.ratings[t.id];
      if (r && r.difficulty) {
        rated++;
        sum += r.difficulty;
        if (dist.hasOwnProperty(r.difficulty)) dist[r.difficulty]++;
      }
    });
    var avg = rated ? (sum / rated).toFixed(1) : '-';
    var unrated = tasks.length - rated;

    $('#trainer-live-chart').innerHTML = buildDifficultyChartHtml(dist);
    $('#trainer-live-meta').innerHTML =
      '<div class="trainer-live-meta-item"><div class="trainer-live-meta-value">' + completed + '</div><div class="trainer-live-meta-label">' + t('completed') + '</div></div>' +
      '<div class="trainer-live-meta-item"><div class="trainer-live-meta-value">' + avg + '</div><div class="trainer-live-meta-label">' + t('avg_difficulty') + '</div></div>' +
      '<div class="trainer-live-meta-item"><div class="trainer-live-meta-value">' + unrated + '</div><div class="trainer-live-meta-label">' + t('unrated') + '</div></div>';
  }

  function buildTrainerStatsText() {
    var tasks = state.trainer.tasks || [];
    if (!tasks.length) return '';
    var lines = [t('trainer_stats') + ' (' + new Date().toLocaleDateString() + ')', '', 'Aufgabe | Schwierigkeit | ' + t('attempt') + ' | Notizen'];
    tasks.forEach(function (t) {
      var r = state.ratings[t.id];
      var stars = '', count = '0', notes = '';
      if (r) {
        if (r.difficulty) { for (var i = 0; i < r.difficulty; i++) stars += '\u2605'; }
        count = String(r.count || 0);
        notes = r.notes || '';
      }
      lines.push(t.id + ' | ' + (stars || '-') + ' | ' + count + ' | ' + notes);
    });
    return lines.join('\n');
  }

  function renderThemenView() {
    var html = '';
    THEMEN.forEach(function (area) {
      var aDone = 0, aTotal = 0;
      area.methods.forEach(function (m) { m.items.forEach(function () { aTotal++; }); });
      for (var k in state.themenProgress) {
        if (k.indexOf('th-' + area.area + '-') === 0 && state.themenProgress[k]) aDone++;
      }
      var aPct = aTotal ? Math.round(aDone / aTotal * 100) : 0;
      var aCollapsed = state.collapsedSections['th-' + area.area] ? '' : ' collapsed';

      html += '<div class="th-area' + aCollapsed + '" data-section="th-' + area.area + '">';
      html += '<div class="th-area-header" data-section-toggle="th-' + area.area + '">';
      html += '<span class="arrow">\u25BC</span>';
      html += '<span class="th-area-title">' + esc(area.label) + '</span>';
      html += '<span class="task-section-meta">' + aDone + '/' + aTotal + '</span>';
      html += '<div class="task-section-bar"><div class="task-section-bar-fill" style="width:' + aPct + '%"></div></div>';
      html += '</div>';
      html += '<div class="th-area-body">';

      html += '<div class="th-intro">' + esc(area.intro) + '</div>';

      if (area.functionTypes) {
        html += '<div class="th-subsection">';
        html += '<div class="th-sub-header th-sub-header-fn">Wichtige relevante Funktionstypen</div>';
        html += '<ul class="th-item-list">';
        area.functionTypes.forEach(function (ft) {
          html += '<li class="th-item">' + esc(ft) + '</li>';
        });
        html += '</ul></div>';
      }

      area.methods.forEach(function (m) {
        var mKey = 'th-' + area.area + '-' + m.title.replace(/\s+/g, '-').toLowerCase();
        var mCollapsed = state.collapsedSections[mKey] ? '' : ' collapsed';
        var mTotal = m.items.length;
        var mDone = 0;
        for (var i = 0; i < m.items.length; i++) {
          if (state.themenProgress[mKey + '-' + i]) mDone++;
        }
        var mPct = mTotal ? Math.round(mDone / mTotal * 100) : 0;

        html += '<div class="th-subsection' + mCollapsed + '" data-section="' + esc(mKey) + '">';
        html += '<div class="th-sub-header" data-section-toggle="' + esc(mKey) + '">';
        html += '<span class="arrow">\u25BC</span>';
        html += '<span class="th-sub-title">' + esc(m.title) + '</span>';
        html += '<span class="th-sub-meta">' + mDone + '/' + mTotal + '</span>';
        html += '<div class="th-sub-bar"><div class="th-sub-bar-fill" style="width:' + mPct + '%"></div></div>';
        html += '</div>';
        html += '<div class="th-sub-body">';
        if (m.desc) html += '<div class="th-desc">' + esc(m.desc) + '</div>';
        html += '<ul class="th-item-list">';
        m.items.forEach(function (item, idx) {
          var itemKey = mKey + '-' + idx;
          var checked = state.themenProgress[itemKey] ? ' checked' : '';
          html += '<li class="th-item">';
          html += '<label class="th-check-label' + (checked ? ' th-checked' : '') + '">';
          html += '<input type="checkbox" class="th-checkbox" data-key="' + esc(itemKey) + '"' + checked + '>';
          html += '<span class="th-item-text">' + esc(item) + '</span>';
          html += '</label>';
          html += '</li>';
        });
        html += '</ul></div></div>';
      });

      html += '</div></div>';
    });
    $('#themen-content').innerHTML = html;

    $$('.th-checkbox').forEach(function (cb) {
      cb.addEventListener('change', function () {
        state.themenProgress[this.dataset.key] = this.checked;
        saveProgress();
        // update progress bars without full re-render
        var label = this.closest('.th-check-label');
        if (label) label.classList.toggle('th-checked', this.checked);
        recalcThemenProgress();
      });
    });
    $$('[data-section-toggle]').forEach(function (h) {
      h.addEventListener('click', onSectionToggle);
    });
  }

  function recalcThemenProgress() {
    THEMEN.forEach(function (area) {
      var aDone = 0, aTotal = 0;
      area.methods.forEach(function (m) { aTotal += m.items.length; });
      for (var k in state.themenProgress) {
        if (k.indexOf('th-' + area.area + '-') === 0 && state.themenProgress[k]) aDone++;
      }
      var aPct = aTotal ? Math.round(aDone / aTotal * 100) : 0;
      var aSec = document.querySelector('[data-section="th-' + area.area + '"]');
      if (aSec) {
        var meta = aSec.querySelector('.task-section-meta');
        if (meta) meta.textContent = aDone + '/' + aTotal;
        var fill = aSec.querySelector('.task-section-bar-fill');
        if (fill) fill.style.width = aPct + '%';
      }

      area.methods.forEach(function (m) {
        var mKey = 'th-' + area.area + '-' + m.title.replace(/\s+/g, '-').toLowerCase();
        var mDone = 0;
        for (var i = 0; i < m.items.length; i++) {
          if (state.themenProgress[mKey + '-' + i]) mDone++;
        }
        var mPct = m.items.length ? Math.round(mDone / m.items.length * 100) : 0;
        var mSec = document.querySelector('[data-section="' + mKey + '"]');
        if (mSec) {
          var meta = mSec.querySelector('.th-sub-meta');
          if (meta) meta.textContent = mDone + '/' + m.items.length;
          var fill = mSec.querySelector('.th-sub-bar-fill');
          if (fill) fill.style.width = mPct + '%';
        }
      });
    });
  }

  function esc(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  document.addEventListener('DOMContentLoaded', init);
})();

