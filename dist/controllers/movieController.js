var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as movieRepository from '../repositories/movieRepository.js';
export function getMovies(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var movies, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, movieRepository.moviesList()];
                case 1:
                    movies = _a.sent();
                    return [2 /*return*/, res.status(200).send(movies.rows)];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [2 /*return*/, res.sendStatus(500)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
export function insertOne(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newMovie, findMovie, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newMovie = req.body;
                    return [4 /*yield*/, movieRepository.findMovie(newMovie)];
                case 1:
                    findMovie = _a.sent();
                    if (findMovie.rowCount === 1) {
                        return [2 /*return*/, res.status(409).send('Movie already registered')];
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, movieRepository.insertMovie(newMovie)];
                case 3:
                    result = _a.sent();
                    return [2 /*return*/, res.status(201).send("Movie inserted ".concat(result.rowCount))];
                case 4:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [2 /*return*/, res.status(500).send(error_2.detail)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
;
export function writeReview(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, newReview, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.movieId;
                    newReview = req.body.review;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, movieRepository.updateReview(id, newReview)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send("review updated successfully")];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
;
export function updateRate(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, newRate, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.movieId;
                    newRate = req.body.rate;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, movieRepository.updateRate(id, newRate)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send("rate updated successfully")];
                case 3:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [2 /*return*/, res.sendStatus(5000)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
;
export function deleteMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, movieById, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.movieId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, movieRepository.findMovieById(id)];
                case 2:
                    movieById = _a.sent();
                    if (movieById.rowCount !== 1) {
                        res.sendStatus(404);
                    }
                    return [4 /*yield*/, movieRepository.deleteUniqueMovie(id)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(204).send("movie deleted")];
                case 4:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [2 /*return*/, res.status(500).send(error_5.detail)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
;
export function moviesWithSameGenre(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var genre, moviesList, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    genre = req.query.genre;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, movieRepository.listSameGenreMovies(genre)];
                case 2:
                    moviesList = _a.sent();
                    if (moviesList.rowCount === 0) {
                        return [2 /*return*/, res.status(404).send("movies with this genre not found")];
                    }
                    return [2 /*return*/, res.status(200).send(moviesList.rows)];
                case 3:
                    error_6 = _a.sent();
                    console.log(error_6.detail);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
;
