from django.db import models
from .validators import validate_file_extension


class Technology(models.Model):
  name = models.CharField(max_length=100)
  icon = models.FileField(upload_to='icons', validators=[validate_file_extension])

  class Meta:
    verbose_name = 'Technology'
    verbose_name_plural = 'Technologies'

  def __str__(self):
    return self.name
