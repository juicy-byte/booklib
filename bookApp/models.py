from django.db import models
from Users.models import CustomUser
from . import validator


# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='books')
    description = models.CharField(max_length=500)
    published_date = models.DateField()
    language = models.CharField(max_length=255)
    book_price = models.DecimalField(max_digits=10, decimal_places=2)
    cover_image = models.ImageField(upload_to='book_cover/', null=True, blank=True)
    year = models.PositiveIntegerField()
    # sub_category = models.CharField(max_length=255)
    document =models.FileField(upload_to='books/', null=True, blank=True, validators=[validator.validateDocumentPageLimit])

    def __str__(self):
        return self.title